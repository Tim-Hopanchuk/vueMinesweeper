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
  <div class="game-header border-in-thick">
    <div class="counter-container border-in-thin">{{ props.remainingMines }}</div>
    <Smile :smileState="props.smileState" @click="emits('resetGame')" />
    <div class="counter-container border-in-thin">{{ props.elapsedTime }}</div>
  </div>
</template>

<style scoped></style>
