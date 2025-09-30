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
  <div class="field">
    <div v-for="(row, rowIndex) in props.field" :key="rowIndex">
      <Cell
        v-for="cell in row"
        :key="cell.index[0] + '.' + cell.index[1]"
        :cellProperties="cell"
        @open-cell="emits('openCell', cell.index)"
        @mark-cell="emits('markCell', cell.index)"
        :class="{
          opened: cell.isOpened,
          exploded: cell.isExploded,
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.field {
  width: fit-content;
  border-left: 7px solid #828282;
  border-top: 7px solid #828282;
  border-right: 7px solid #ffffff;
  border-bottom: 7px solid #ffffff;
}

.field > div {
  display: flex;
}
</style>
