import type { CellType } from './types';
import { getFieldCopy } from './getFieldCopy';

/**
 * Opens a cell and automatically reveals connected empty areas
 * If the cell has no adjacent mines, recursively opens all connected empty cells and their borders
 *
 * @param {CellType[][]} field - array representing the game field with cell information
 * @param {[number, number]} index - the [y, x] coordinates of the cell to open
 * @returns {CellType[][]} a new field with the specified cell and connected empty area opened
 *
 */

export function getFieldWithOpenedCell(field: CellType[][], index: [number, number]): CellType[][] {
  const fieldWithOpenedCell: CellType[][] = getFieldCopy(field);
  const height = fieldWithOpenedCell.length;
  const width = fieldWithOpenedCell[0].length;
  const queue: [number, number][] = [index];
  const visited = new Set<string>();

  for (let i = 0; i < queue.length; i++) {
    const y = queue[i][0];
    const x = queue[i][1];

    fieldWithOpenedCell[y][x].isOpened = true;
    fieldWithOpenedCell[y][x].isFlagMarked = false;
    fieldWithOpenedCell[y][x].isQuestionMarked = false;
    visited.add(y + '.' + x);

    if (fieldWithOpenedCell[y][x].adjacentMines > 0) {
      continue;
    }

    for (let yOffset = -1; yOffset < 2; yOffset++) {
      for (let xOffset = -1; xOffset < 2; xOffset++) {
        const currentY = y + yOffset;
        const currentX = x + xOffset;

        if (visited.has(currentY + '.' + currentX)) {
          continue;
        }

        // Check for out-of-bounds access
        if (currentY < 0 || currentX < 0) {
          continue;
        }
        if (currentY > height - 1 || currentX > width - 1) {
          continue;
        }

        queue.push([currentY, currentX]);
      }
    }
  }

  return fieldWithOpenedCell;
}
