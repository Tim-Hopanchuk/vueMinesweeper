import type { CellType } from '@/utils/types';
import { getFieldCopy } from './getFieldCopy';

export function getFieldWithOpenedMines(
  field: CellType[][],
  explodedMineIndex: [number, number],
): CellType[][] {
  const fieldWithOpenedMines: CellType[][] = getFieldCopy(field);

  const height = fieldWithOpenedMines.length;
  const width = fieldWithOpenedMines[0].length;

  fieldWithOpenedMines[explodedMineIndex[0]][explodedMineIndex[1]].isExploded = true;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (fieldWithOpenedMines[y][x].isMine) {
        fieldWithOpenedMines[y][x].isOpened = true;
      }
    }
  }

  return fieldWithOpenedMines;
}
