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

let gameStatus: 'idle' | 'running' | 'ended' = 'idle';
let smileStatus: 'neutral' | 'win' | 'lose' = 'neutral';

let minesLeft = ref(mines);
let timerId: number;
let time = ref(0);

const field: Ref<CellType[][]> = ref(getEmptyField(width, height));

function startNewGame(): void {
  gameStatus = 'idle';
  smileStatus = 'neutral';
  field.value = getEmptyField(width, height);
  clearInterval(timerId);
  time.value = 0;
  minesLeft.value = mines;
}

function openCell(index: [number, number]): void {
  if (gameStatus === 'ended') {
    return;
  }

  if (field.value[index[0]][index[1]].isFlagMarked) {
    return;
  }

  if (gameStatus === 'idle') {
    // start logic

    gameStatus = 'running';
    timerId = setInterval(() => time.value++, 1000);
    field.value = getMinedField(field.value, index, mines);
    field.value = getCalculatedField(field.value);
  }

  if (field.value[index[0]][index[1]].isMine) {
    // lose logic

    field.value = getFieldWithOpenedMines(field.value, index);

    gameStatus = 'ended';
    smileStatus = 'lose';
    clearInterval(timerId);
    alert('lose, time: ' + time.value);
    return;
  }

  field.value = getFieldWithOpenedCell(field.value, index);

  if (areAllSafeCellsOpened(field.value)) {
    // win logic

    gameStatus = 'ended';
    smileStatus = 'win';
    clearInterval(timerId);
    alert('win, time: ' + time.value);
    return;
  }
}

function markCell(index: [number, number]): void {
  if (gameStatus === 'ended') {
    return;
  }

  field.value = getFieldWithMarkedCell(field.value, index);
  minesLeft.value = mines - getFlagMarkedCellsCount(field.value);
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
    width = 24;
    height = 24;
    mines = 99;
  }

  startNewGame();
}
</script>

<template>
  Mines left:{{ minesLeft }}<Smile :status="smileStatus" @click="startNewGame" /> Time:{{ time }}

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
  
  <Difficulty difficulty="easy" @change-difficulty="changeDifficulty" />
  <Difficulty difficulty="medium" @change-difficulty="changeDifficulty" />
  <Difficulty difficulty="hard" @change-difficulty="changeDifficulty" />
</template>

<style scoped>
div {
  height: 34px;
}
</style>
