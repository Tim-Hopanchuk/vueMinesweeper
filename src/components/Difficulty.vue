<script setup lang="ts">
const props = defineProps<{
  difficulty: 'easy' | 'medium' | 'hard';
}>();
const emits = defineEmits<{
  changeDifficulty: [difficulty: 'easy' | 'medium' | 'hard'];
}>();
</script>

<template>
  <button class="btn border-out-thin" @click="emits('changeDifficulty', props.difficulty)">
    {{ props.difficulty }}
  </button>
</template>

<style scoped>
button {
  height: 34px;
  width: 150px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-family: arcadeclassic;
  font-size: 28px;
  letter-spacing: 2px;
  text-indent: 15px;
}
</style>
