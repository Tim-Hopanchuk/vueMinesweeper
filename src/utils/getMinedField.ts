import type { CellType } from './types';
import { getFieldCopy } from './getFieldCopy';

/**
 * Randomly places mines on the field
 *
 * @param {CellType[][]} field - array representing the game field with cell information
 * @param {[number, number]} startCellIndex - the [y, x] coordinates of the first clicked cell (a mine cannot be placed here)
 * @param {number} mines - the number of mines to place on the field
 * @returns {CellType[][]} a new field with randomly placed mines
 * 
 * @throws {Error} when the mine count is negative or exceeds the number of available cells
 * 
 */

export function getMinedField(
  field: CellType[][],
  startCellIndex: [number, number],
  mines: number,
): CellType[][] {
  if (mines < 0) {
    throw new Error('Invalid mine count');
  }

  const minedField: CellType[][] = getFieldCopy(field);
  const height = minedField.length;
  const width = minedField[0].length;

  if (mines > height * width - 1) {
    throw new Error('Invalid mine count');
  }

  let minesPlaced = 0;
  while (minesPlaced < mines) {
    let y = getRandomIntUpTo(height - 1);
    let x = getRandomIntUpTo(width - 1);

    if (y === startCellIndex[0] && x === startCellIndex[1]) {
      continue;
    }
    if (minedField[y][x].isMine) {
      continue;
    }

    minedField[y][x].isMine = true;
    minesPlaced++;
  }

  return minedField;
}

/**
 * Returns a random integer between 0 and the given max (inclusive)
 *
 * @param {number} max - the maximum value
 * @returns {number} a random integer in the range [0, max]
 * 
 * @throws {Error} when max is negative
 */

export function getRandomIntUpTo(max: number): number {
  if (max < 0) {
    throw new Error('Invalid max value');
  }

  return Math.floor(Math.random() * (max + 1));
}
