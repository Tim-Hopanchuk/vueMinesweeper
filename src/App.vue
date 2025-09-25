<script setup lang="ts">
import type { Ref } from 'vue';
import { ref } from 'vue';

import Cell from './components/Cell.vue';
import Difficulty from './components/Difficulty.vue';
import Smile from './components/Smile.vue';

import type { CellType } from './utils/types';
import { getEmptyField } from './utils/getEmptyField';
import { getMinedField } from './utils/getMinedField';
import { getCalculatedField } from './utils/getCalculatedField';
import { getFieldWithOpenedCell } from './utils/getFieldWithOpenedCell';
import { getFieldWithMarkedCell } from './utils/getFieldWithMarkedCell';
import { areAllSafeCellsOpened } from './utils/areAllSafeCellsOpened';
import { getFieldWithOpenedMines } from './utils/getFieldWithOpenedMines';
import { getFlagMarkedCellsCount } from './utils/getFlagMarkedCellsCount';

let width = 8;
let height = 8;
let mines = 10;

let gameState: 'idle' | 'running' | 'ended' = 'idle';
let smileState: 'neutral' | 'win' | 'lose' = 'neutral';

let remainingMines = ref(mines);
let timerId: number;
let elapsedTime = ref(0);

const field: Ref<CellType[][]> = ref(getEmptyField(width, height));

function startNewGame(): void {
  gameState = 'idle';
  smileState = 'neutral';
  field.value = getEmptyField(width, height);
  clearInterval(timerId);
  elapsedTime.value = 0;
  remainingMines.value = mines;
}

function openCell(index: [number, number]): void {
  if (gameState === 'ended') {
    return;
  }

  if (field.value[index[0]][index[1]].isFlagMarked) {
    return;
  }

  // Start game logic
  if (gameState === 'idle') {
    gameState = 'running';
    timerId = setInterval(() => elapsedTime.value++, 1000);
    field.value = getMinedField(field.value, index, mines);
    field.value = getCalculatedField(field.value);
  }

  // Lose game logic
  if (field.value[index[0]][index[1]].isMine) {
    field.value = getFieldWithOpenedMines(field.value, index);

    gameState = 'ended';
    smileState = 'lose';
    clearInterval(timerId);
    alert('lose, time: ' + elapsedTime.value);
    return;
  }

  field.value = getFieldWithOpenedCell(field.value, index);
  remainingMines.value = mines - getFlagMarkedCellsCount(field.value);

  // Win game logic
  if (areAllSafeCellsOpened(field.value)) {
    gameState = 'ended';
    smileState = 'win';
    clearInterval(timerId);
    alert('win, time: ' + elapsedTime.value);
    return;
  }
}

function markCell(index: [number, number]): void {
  if (gameState === 'ended') {
    return;
  }
  if (field.value[index[0]][index[1]].isOpened) {
    return;
  }

  field.value = getFieldWithMarkedCell(field.value, index);
  remainingMines.value = mines - getFlagMarkedCellsCount(field.value);
}

function changeDifficulty(difficulty: 'easy' | 'medium' | 'hard'): void {
  if (difficulty === 'easy') {
    width = 8;
    height = 8;
    mines = 10;
  }

  if (difficulty === 'medium') {
    width = 16;
    height = 16;
    mines = 40;
  }

  if (difficulty === 'hard') {
    width = 30;
    height = 16;
    mines = 99;
  }

  startNewGame();
}
</script>

<template>
  <div class="app">
    <div class="game border-out-thick">
      <div class="dashboard border-in-thick">
        <div class="number border-in-thin">{{ remainingMines }}</div>
        <Smile :status="smileState" @click="startNewGame" />
        <div class="number border-in-thin">{{ elapsedTime }}</div>
      </div>

      <div class="field border-in-thick">
        <div v-for="row in field">
          <Cell
            v-for="cell in row"
            :key="cell.index[0] + '.' + cell.index[1]"
            :cellProperties="cell"
            :class="{
              opened: cell.isOpened,
              exploded: cell.isExploded,
            }"
            @open-cell="openCell"
            @mark-cell="markCell"
          />
        </div>
      </div>
    </div>

    <div class="difficulty">
      <Difficulty difficulty="easy" @change-difficulty="changeDifficulty" />
      <Difficulty difficulty="medium" @change-difficulty="changeDifficulty" />
      <Difficulty difficulty="hard" @change-difficulty="changeDifficulty" />
    </div>
  </div>
</template>

<style>
.btn {
  background-color: #c3c3c3;
  padding: 0;
  position: relative;
}

.btn:hover {
  background-color: #d2d2d2;
}

.btn:active {
  background-color: #b9b9b9;
}

.border-out-thin {
  border-left: 4px solid #ffffff;
  border-top: 4px solid #ffffff;
  border-right: 4px solid #828282;
  border-bottom: 4px solid #828282;
}

.border-out-thick {
  border-left: 7px solid #ffffff;
  border-top: 7px solid #ffffff;
  border-right: 7px solid #828282;
  border-bottom: 7px solid #828282;
}

.border-in-thin {
  border-left: 2px solid #828282;
  border-top: 2px solid #828282;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
}

.border-in-thick {
  border-left: 7px solid #828282;
  border-top: 7px solid #828282;
  border-right: 7px solid #ffffff;
  border-bottom: 7px solid #ffffff;
}

.icon-center img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.field {
  width: fit-content;
}

.game {
  background-color: #c3c3c3;
  padding: 13px;
  width: fit-content;
}

.dashboard {
  background-color: #c3c3c3;
  padding: 9px;
  margin-bottom: 13px;

  display: flex;
  justify-content: space-between;
}

.number {
  font-family: 'technology';
  font-size: 64px;
  width: 87px;
  background-color: black;
  color: #ff0000;
  line-height: 1;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.app {
  display: flex;
  justify-content: center;
  transform: translateX(75px);
}

.difficulty {
  transform: translateY(122px);
}

.field > div {
  display: flex;
}

html {
  background-color: #008080;

  height: 100%;
  user-select: none;
}

body {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@font-face {
  font-family: 'technology';
  src: url('@/assets/fonts/digital-7.mono.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'arcadeclassic';
  src: url('@/assets/fonts/arcadeclassic.regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>
