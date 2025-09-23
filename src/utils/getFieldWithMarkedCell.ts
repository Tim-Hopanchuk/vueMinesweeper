import type { CellType } from './types';
import { getFieldCopy } from './getFieldCopy';

/**
 * Toggles the marking state of a cell through the cycle: unmarked → flagged → questioned → unmarked
 *
 * @param {CellType[][]} field - array representing the game field with cell information
 * @param {[number, number]} index - the [y, x] coordinates of the cell to mark
 * @returns {CellType[][]} a new field with the specified cell's marking state changed
 *
 */

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
    fieldWithMarkedCell[y][x].isQuestionMarked = false;

    return fieldWithMarkedCell;
  }

  fieldWithMarkedCell[y][x].isFlagMarked = true;

  return fieldWithMarkedCell;
}
