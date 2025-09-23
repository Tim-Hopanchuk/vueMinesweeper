import type { CellType } from './types';
import { getFieldCopy } from './getFieldCopy';

/**
 * Calculates the number of adjacent mines for each cell in the field
 *
 * @param {CellType[][]} field - array representing the game field with cell information
 * @returns {CellType[][]} a new field with adjacentMines property calculated for each cell
 *
 */

export function getCalculatedField(field: CellType[][]): CellType[][] {
  const calculatedField: CellType[][] = getFieldCopy(field);
  const height = calculatedField.length;
  const width = calculatedField[0].length;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      calculatedField[y][x].adjacentMines = getAdjacentMines(calculatedField, [y, x]);
    }
  }

  return calculatedField;
}

/**
 * Counts the number of mines in the adjacent cells around a given position
 *
 * @param {CellType[][]} field - array representing the game field with cell information
 * @param {[number, number]} index - the [y, x] coordinates of the cell to check around
 * @returns {number} the count of mines in adjacent cells
 *
 */

function getAdjacentMines(field: CellType[][], index: [number, number]): number {
  const height = field.length;
  const width = field[0].length;
  let adjacentMines = 0;

  for (let yOffset = -1; yOffset < 2; yOffset++) {
    for (let xOffset = -1; xOffset < 2; xOffset++) {
      const y = index[0] + yOffset;
      const x = index[1] + xOffset;

      if (yOffset === 0 && xOffset === 0) {
        continue;
      }

      // Check for out-of-bounds access
      if (y < 0 || x < 0) {
        continue;
      }
      if (y > height - 1 || x > width - 1) {
        continue;
      }

      if (field[y][x].isMine) {
        adjacentMines++;
      }
    }
  }

  return adjacentMines;
}
