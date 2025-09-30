<script setup lang="ts">
import type { DifficultyType } from '../utils/types';

const props = defineProps<{
  difficulty: DifficultyType;
}>();
const emits = defineEmits<{
  changeDifficulty: [difficulty: DifficultyType];
}>();
</script>

<template>
  <button @click="emits('changeDifficulty', props.difficulty)" class="btn border-out-thin">
    {{ props.difficulty }}
  </button>
</template>

<style scoped>
button {
  height: 34px;
  width: 150px;
  position: relative;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #c3c3c3;
  border-left: 4px solid #ffffff;
  border-top: 4px solid #ffffff;
  border-right: 4px solid #828282;
  border-bottom: 4px solid #828282;
  font-family: arcadeclassic;
  font-size: 28px;
  letter-spacing: 2px;
  text-indent: 15px;
}

button:hover {
  background-color: #d2d2d2;
}

button:active {
  background-color: #b9b9b9;
}
</style>
