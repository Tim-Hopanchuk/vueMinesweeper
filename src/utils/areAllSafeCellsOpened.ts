import type { CellType } from '@/utils/types';

export function areAllSafeCellsOpened(field: CellType[][]): boolean {
  const height = field.length;
  const width = field[0].length;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (field[y][x].isMine) {
        continue;
      }
      if (field[y][x].isOpened) {
        continue;
      }

      return false;
    }
  }

  return true;
}
