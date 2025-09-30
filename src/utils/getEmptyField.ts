import type { CellType } from './types';

/**
 * Creates an empty game field with specified dimensions and default cell values
 *
 * @param {number} width - the width of the field (number of columns)
 * @param {number} height - the height of the field (number of rows)
 * @returns {CellType[][]} array representing an empty game field with initialized cells
 *
 * @throws {Error} when width or height is less than 1, or when total cells is less than 2
 */

export function getEmptyField(width: number, height: number): CellType[][] {
  if (width < 1 || height < 1 || width * height < 2) {
    throw new Error("Invalid field's width or height");
  }

  const emptyField: CellType[][] = [];

  for (let y = 0; y < height; y++) {
    emptyField[y] = [];
    for (let x = 0; x < width; x++) {
      emptyField[y][x] = {
        isOpened: false,
        isMine: false,
        isFlagMarked: false,
        isQuestionMarked: false,
        isExploded: false,
        adjacentMines: 0,
        index: [y, x],
      };
    }
  }

  return emptyField;
}
