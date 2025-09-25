<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { computed } from 'vue';

import neutralIcon from '@/assets/images/smile_neutral.svg';
import winIcon from '@/assets/images/smile_win.svg';
import loseIcon from '@/assets/images/smile_lose.svg';

const props = defineProps<{ status: 'neutral' | 'win' | 'lose' }>();

const icon: ComputedRef<string> = computed(() => {
  switch (props.status) {
    case 'win':
      return winIcon;
    case 'lose':
      return loseIcon;

    default:
      return neutralIcon;
  }
});
</script>

<template>
  <button class="btn border-out-thin icon-center">
    <img :src="icon" draggable="false" />
  </button>
</template>

<style scoped>
button {
  height: 50px;
  width: 50px;
}

img {
  height: 42px;
  width: 42px;
}
</style>
