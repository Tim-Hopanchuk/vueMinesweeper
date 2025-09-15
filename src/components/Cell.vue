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
  if (!props.cellProperties.isOpened) {
    return '';
  }

  if (props.cellProperties.isMine) {
    return mineIcon;
  }
  if (props.cellProperties.isFlagged) {
    return flagIcon;
  }
  if (props.cellProperties.isQuestioned) {
    return questionIcon;
  }

  switch (props.cellProperties.minesAround) {
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
    <img v-if="icon" :src="icon" />
  </button>
</template>

<style scoped>
button {
  height: 34px;
  width: 34px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  height: 34px;
  width: 34px;
}

.exploded {
  background-color: red;
}
</style>
