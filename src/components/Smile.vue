<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import type { SmileStateType } from '../utils/types';

import neutralIcon from '../assets/images/smile_neutral.svg';
import winIcon from '../assets/images/smile_win.svg';
import loseIcon from '../assets/images/smile_lose.svg';

const props = defineProps<{ smileState: SmileStateType }>();

const icon: ComputedRef<string> = computed(() => {
  switch (props.smileState) {
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
    <img :src="icon" draggable="false" />
  </button>
</template>

<style scoped>
button {
  height: 50px;
  width: 50px;
  position: relative;
  padding: 0;
  background-color: #c3c3c3;
  border-left: 4px solid #ffffff;
  border-top: 4px solid #ffffff;
  border-right: 4px solid #828282;
  border-bottom: 4px solid #828282;
}

button:hover {
  background-color: #d2d2d2;
}

button:active {
  background-color: #b9b9b9;
}

img {
  height: 42px;
  width: 42px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
</style>
