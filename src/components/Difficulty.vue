<script setup lang="ts">
const props = defineProps<{
  difficulty: 'easy' | 'medium' | 'hard';
}>();
const emits = defineEmits<{
  changeDifficulty: [difficulty: 'easy' | 'medium' | 'hard'];
}>();
</script>

<template>
  <button @click="emits('changeDifficulty', props.difficulty)">{{ props.difficulty }}</button>
</template>

<style scoped>
button {
  height: 34px;
  width: 100px;
  padding: 0px;
  margin: 0px;
}
</style>
