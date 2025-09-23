import type { CellType } from './types';
import { getFieldCopy } from './getFieldCopy';

/**
 * Reveals all mines on the field when a mine explodes, marking the exploded mine (game over state)
 *
 * @param {CellType[][]} field - array representing the game field with cell information
 * @param {[number, number]} explodedMineCellIndex - the [y, x] coordinates of the mine that exploded
 * @returns {CellType[][]} a new field with all mines revealed and the exploded mine marked
 *
 */

export function getFieldWithOpenedMines(
  field: CellType[][],
  explodedMineCellIndex: [number, number],
): CellType[][] {
  const fieldWithOpenedMines: CellType[][] = getFieldCopy(field);
  const height = fieldWithOpenedMines.length;
  const width = fieldWithOpenedMines[0].length;

  fieldWithOpenedMines[explodedMineCellIndex[0]][explodedMineCellIndex[1]].isExploded = true;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (fieldWithOpenedMines[y][x].isMine) {
        fieldWithOpenedMines[y][x].isOpened = true;
      }
    }
  }

  return fieldWithOpenedMines;
}
