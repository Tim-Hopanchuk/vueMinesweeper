<script setup lang="ts">
import type { SmileStateType } from '../utils/types';
import Smile from './Smile.vue';

const props = defineProps<{
  remainingMines: number;
  elapsedTime: number;
  smileState: SmileStateType;
}>();
const emits = defineEmits(['resetGame']);
</script>

<template>
  <div class="dashboard">
    <div class="counter">{{ props.remainingMines }}</div>
    <Smile :smileState="props.smileState" @click="emits('resetGame')" />
    <div class="counter">{{ props.elapsedTime }}</div>
  </div>
</template>

<style scoped>
.dashboard {
  margin-bottom: 13px;
  padding: 9px;
  display: flex;
  justify-content: space-between;
  background-color: #c3c3c3;
  border-left: 7px solid #828282;
  border-top: 7px solid #828282;
  border-right: 7px solid #ffffff;
  border-bottom: 7px solid #ffffff;
}

.counter {
  height: 46px;
  width: 87px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: black;
  border-left: 2px solid #828282;
  border-top: 2px solid #828282;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  color: #ff0000;
  font-family: 'technology';
  font-size: 64px;
}
</style>
