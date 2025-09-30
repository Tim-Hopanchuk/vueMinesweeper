<script setup lang="ts">
import type { CellType } from '../utils/types';
import Cell from './Cell.vue';

const props = defineProps<{
  field: CellType[][];
}>();
const emits = defineEmits<{
  openCell: [index: [number, number]];
  markCell: [index: [number, number]];
}>();
</script>

<template>
  <div class="game-field border-in-thick">
    <div v-for="row in props.field">
      <Cell
        v-for="cell in row"
        :key="cell.index[0] + '.' + cell.index[1]"
        :cellProperties="cell"
        :class="{
          opened: cell.isOpened,
          exploded: cell.isExploded,
        }"
        @open-cell="emits('openCell', cell.index)"
        @mark-cell="emits('markCell', cell.index)"
      />
    </div>
  </div>
</template>

<style scoped></style>
