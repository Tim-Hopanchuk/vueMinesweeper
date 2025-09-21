import type { CellType } from '@/utils/types';
import { getFieldCopy } from './getFieldCopy';

export function getFieldWithMarkedCell(field: CellType[][], index: [number, number]): CellType[][] {
  const fieldWithMarkedCell: CellType[][] = getFieldCopy(field);

  const y = index[0];
  const x = index[1];

  if (fieldWithMarkedCell[y][x].isFlagMarked) {
    fieldWithMarkedCell[y][x].isFlagMarked = false;
    fieldWithMarkedCell[y][x].isQuestionMarked = true;

    return fieldWithMarkedCell;
  }

  if (fieldWithMarkedCell[y][x].isQuestionMarked) {
    fieldWithMarkedCell[y][x].isFlagMarked = false;
    fieldWithMarkedCell[y][x].isQuestionMarked = false;

    return fieldWithMarkedCell;
  }

  fieldWithMarkedCell[y][x].isFlagMarked = true;
  return fieldWithMarkedCell;
}
