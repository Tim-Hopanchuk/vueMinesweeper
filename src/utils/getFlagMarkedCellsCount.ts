import type { CellType } from './types';

/**
 * Counts flag marked cells
 *
 * @param {CellType[][]} field - array representing the game field with cell information
 * @returns {number} number of flag marked cells
 *
 */

export function getFlagMarkedCellsCount(field: CellType[][]): number {
  const height = field.length;
  const width = field[0].length;
  let flagMarkedCellsCount = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (field[y][x].isFlagMarked) {
        flagMarkedCellsCount++;
      }
    }
  }

  return flagMarkedCellsCount;
}
