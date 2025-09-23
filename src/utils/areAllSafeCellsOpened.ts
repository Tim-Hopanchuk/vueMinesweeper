import type { CellType } from './types';

/**
 * Checks if all non-mine cells in the field are opened (win condition)
 *
 * @param {CellType[][]} field - array representing the game field with cell information
 * @returns {boolean} true if all safe (non-mine) cells are opened, false otherwise
 *
 */

export function areAllSafeCellsOpened(field: CellType[][]): boolean {
  const height = field.length;
  const width = field[0].length;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (field[y][x].isMine || field[y][x].isOpened) {
        continue;
      }
      return false;
    }
  }

  return true;
}
