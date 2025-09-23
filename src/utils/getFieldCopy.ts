import type { CellType } from './types';

/**
 * Creates a deep copy of the game field with all cell properties and index array cloned
 *
 * @param {CellType[][]} field - array representing the game field with cell information
 * @returns {CellType[][]} a new field that is a deep copy of the original field
 *
 */

export function getFieldCopy(field: CellType[][]): CellType[][] {
  const fieldCopy: CellType[][] = field.map((row) =>
    row.map((cell) => ({ ...cell, index: [...cell.index] })),
  );

  return fieldCopy;
}
