import type { CellType } from '@/utils/types';

export function getFieldCopy(field: CellType[][]): CellType[][] {
  const fieldCopy: CellType[][] = field.map((row) =>
    row.map((cell) => ({ ...cell, index: [...cell.index] })),
  );

  return fieldCopy;
}
