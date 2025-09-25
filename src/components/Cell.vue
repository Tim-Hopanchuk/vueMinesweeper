<script setup lang="ts">
import type { CellType } from '@/utils/types';
import { computed } from 'vue';
import type { ComputedRef } from 'vue';

import mineIcon from '@/assets/images/mine.svg';
import flagIcon from '@/assets/images/flag.svg';
import questionIcon from '@/assets/images/question.svg';

import oneIcon from '@/assets/images/one.svg';
import twoIcon from '@/assets/images/two.svg';
import threeIcon from '@/assets/images/three.svg';
import fourIcon from '@/assets/images/four.svg';
import fiveIcon from '@/assets/images/five.svg';
import sixIcon from '@/assets/images/six.svg';
import sevenIcon from '@/assets/images/seven.svg';
import eightIcon from '@/assets/images/eight.svg';

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
    class="btn border-out-thin icon-center"
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
}

img {
  height: 26px;
  width: 26px;
}

.opened {
  border: 1px solid #828282;
  padding: 3px;
}

.exploded {
  background-color: red;
}
</style>
