import type { CellType } from '@/utils/types';

export function getFieldWithMarkedCell(field: CellType[][], index: [number, number]): CellType[][] {
  const y = index[0];
  const x = index[1];

  if (field[y][x].isFlagMarked) {
    field[y][x].isFlagMarked = false;
    field[y][x].isQuestionMarked = true;

    return field;
  }

  if (field[y][x].isQuestionMarked) {
    field[y][x].isFlagMarked = false;
    field[y][x].isQuestionMarked = false;

    return field;
  }

  field[y][x].isFlagMarked = true;
  return field;
}
