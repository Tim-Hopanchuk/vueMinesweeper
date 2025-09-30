<script setup lang="ts">
import type { Ref } from 'vue';
import { ref } from 'vue';

// Components
import Dashboard from './components/Dashboard.vue';
import Field from './components/Field.vue';
import Cell from './components/Cell.vue';
import Smile from './components/Smile.vue';
import Difficulty from './components/Difficulty.vue';
import Notification from './components/Notification.vue';

// Types and utilities
import type { CellType, GameStateType, SmileStateType, DifficultyType } from './utils/types';
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

let gameState: GameStateType = 'idle';
let smileState: SmileStateType = 'neutral';
let isNotificationVisible: Ref<boolean> = ref(false);

let remainingMines = ref(mines);
let timerId: number;
let elapsedTime = ref(0);

const field: Ref<CellType[][]> = ref(getEmptyField(width, height));

// Game actions
function openCell(index: [number, number]): void {
  if (gameState === 'ended') {
    return;
  }

  if (field.value[index[0]][index[1]].isFlagMarked) {
    return;
  }

  if (gameState === 'idle') {
    startGame(index);
  }

  if (field.value[index[0]][index[1]].isMine) {
    handleLose(index);
    return;
  }

  field.value = getFieldWithOpenedCell(field.value, index);
  remainingMines.value = mines - getFlagMarkedCellsCount(field.value);

  if (areAllSafeCellsOpened(field.value)) {
    handleWin();
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

// Game state management
function resetGame(): void {
  gameState = 'idle';
  smileState = 'neutral';

  remainingMines.value = mines;
  clearInterval(timerId);
  elapsedTime.value = 0;

  field.value = getEmptyField(width, height);
}

function startGame(index: [number, number]): void {
  gameState = 'running';

  timerId = setInterval(() => elapsedTime.value++, 1000);

  field.value = getMinedField(field.value, index, mines);
  field.value = getCalculatedField(field.value);
}

function handleWin(): void {
  gameState = 'ended';
  smileState = 'win';
  isNotificationVisible.value = true;

  clearInterval(timerId);
}

function handleLose(index: [number, number]): void {
  gameState = 'ended';
  smileState = 'lose';

  clearInterval(timerId);

  field.value = getFieldWithOpenedMines(field.value, index);
}

// Configuration
function changeDifficulty(difficulty: DifficultyType): void {
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

  resetGame();
}
</script>

<template>
  <div class="app">
    <div class="game">
      <Dashboard
        :remainingMines="remainingMines"
        :elapsedTime="elapsedTime"
        :smileState="smileState"
        @reset-game="resetGame"
      />

      <Field :field="field" @open-cell="openCell" @mark-cell="markCell" />
    </div>

    <div class="difficulty">
      <Difficulty difficulty="easy" @change-difficulty="changeDifficulty" />
      <Difficulty difficulty="medium" @change-difficulty="changeDifficulty" />
      <Difficulty difficulty="hard" @change-difficulty="changeDifficulty" />
    </div>
  </div>

  <Notification
    :elapsedTime="elapsedTime"
    v-if="isNotificationVisible"
    @click="isNotificationVisible = false"
  />
</template>

<style>
.app {
  transform: translateX(75px);
  display: flex;
  justify-content: center;
}

.game {
  width: fit-content;
  padding: 13px;
  background-color: #c3c3c3;
  border-left: 7px solid #ffffff;
  border-top: 7px solid #ffffff;
  border-right: 7px solid #828282;
  border-bottom: 7px solid #828282;
}

.difficulty {
  height: fit-content;
  transform: translateY(122px);
}

html {
  height: 100%;
  background-color: #008080;
  user-select: none;
}

body {
  height: 100%;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@font-face {
  font-family: 'technology';
  src: url('@/assets/fonts/digital-7.mono.ttf') format('truetype');
}

@font-face {
  font-family: 'arcadeclassic';
  src: url('@/assets/fonts/arcadeclassic.regular.ttf') format('truetype');
}
</style>
