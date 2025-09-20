import type { CellType } from '@/utils/types';

export function getFieldWithOpenedMines(
  field: CellType[][],
  explodedMineIndex: [number, number],
): CellType[][] {
  const height = field.length;
  const width = field[0].length;

  field[explodedMineIndex[0]][explodedMineIndex[1]].isExploded = true;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (field[y][x].isMine) {
        field[y][x].isOpened = true;
      }
    }
  }

  return field;
}
