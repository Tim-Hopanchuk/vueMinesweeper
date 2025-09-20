import type { CellType } from '@/utils/types';
import { getEmptyField } from '@/utils/getEmptyField';
import { getMinedField, getRandomIntUpTo } from '@/utils/getMinedField';
import { getFieldWithOpenedMines } from '@/utils/getFieldWithOpenedMines';
import { describe, it, expect } from 'vitest';
import { getCalculatedField } from '@/utils/getCalculatedField';
import { areAllSafeCellsOpened } from '@/utils/areAllSafeCellsOpened';

describe('areAllSafeCellsOpened', () => {
  it('returns false when some safe cells are closed', () => {
    const width = 8;
    const height = 8;
    const mines = 10;

    const emptyField: CellType[][] = getEmptyField(width, height);
    const minedField: CellType[][] = getMinedField(emptyField, [1, 1], mines);
    const calculatedField: CellType[][] = getCalculatedField(minedField);

    for (let i = 0; i < 15; i++) {
      const y = height - 1;
      const x = width - 1;

      if (calculatedField[y][x].isMine) {
        continue;
      }

      calculatedField[y][x].isOpened = true;
    }

    expect(areAllSafeCellsOpened(calculatedField), 'returns true when game is not yet won').toBe(
      false,
    );
  });

  it('returns true when all safe cells are opened', () => {
    const width = 16;
    const height = 16;
    const mines = 40;

    const emptyField: CellType[][] = getEmptyField(width, height);
    const minedField: CellType[][] = getMinedField(emptyField, [1, 1], mines);
    const calculatedField: CellType[][] = getCalculatedField(minedField);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (calculatedField[y][x].isMine) {
          continue;
        }

        calculatedField[y][x].isOpened = true;
      }
    }

    expect(areAllSafeCellsOpened(calculatedField), 'returns false when game should be won').toBe(
      true,
    );
  });
});
