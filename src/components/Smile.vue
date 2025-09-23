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
  <button>
    <img :src="icon" />
  </button>
</template>

<style scoped>
button {
  height: 68px;
  width: 68px;
  padding: 0px;
  margin: 0px;

  position: relative;
}
img {
  height: 50px;
  width: 50px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
