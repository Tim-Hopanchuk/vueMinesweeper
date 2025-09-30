<script setup lang="ts">
import type { ComputedRef } from 'vue';
import { computed } from 'vue';
import type { CellType } from '../utils/types';

import mineIcon from '../assets/images/mine.svg';
import flagIcon from '../assets/images/flag.svg';
import questionIcon from '../assets/images/question.svg';

import oneIcon from '../assets/images/one.svg';
import twoIcon from '../assets/images/two.svg';
import threeIcon from '../assets/images/three.svg';
import fourIcon from '../assets/images/four.svg';
import fiveIcon from '../assets/images/five.svg';
import sixIcon from '../assets/images/six.svg';
import sevenIcon from '../assets/images/seven.svg';
import eightIcon from '../assets/images/eight.svg';

const props = defineProps<{ cellProperties: CellType }>();
const emits = defineEmits<{
  openCell: [index: [number, number]];
  markCell: [index: [number, number]];
}>();

const icon: ComputedRef<string> = computed(() => {
  if (props.cellProperties.isFlagMarked && !props.cellProperties.isOpened) {
    return flagIcon;
  }

  if (props.cellProperties.isQuestionMarked && !props.cellProperties.isOpened) {
    return questionIcon;
  }

  if (!props.cellProperties.isOpened) {
    return '';
  }

  if (props.cellProperties.isMine) {
    return mineIcon;
  }

  switch (props.cellProperties.adjacentMines) {
    case 1:
      return oneIcon;
    case 2:
      return twoIcon;
    case 3:
      return threeIcon;
    case 4:
      return fourIcon;
    case 5:
      return fiveIcon;
    case 6:
      return sixIcon;
    case 7:
      return sevenIcon;
    case 8:
      return eightIcon;

    default:
      return '';
  }
});
</script>

<template>
  <button
    @click="emits('openCell', props.cellProperties.index)"
    @contextmenu.prevent="emits('markCell', props.cellProperties.index)"
  >
    <img v-if="icon" :src="icon" draggable="false" />
  </button>
</template>

<style scoped>
button {
  height: 34px;
  width: 34px;
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
  height: 26px;
  width: 26px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.opened {
  padding: 3px;
  border: 1px solid #828282;
}

.exploded {
  background-color: red;
}
</style>
