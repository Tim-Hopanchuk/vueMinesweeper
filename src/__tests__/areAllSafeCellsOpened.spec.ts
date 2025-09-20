import type { CellType } from '@/utils/types';
import { getEmptyField } from '@/utils/getEmptyField';
import { areAllSafeCellsOpened } from '@/utils/areAllSafeCellsOpened';
import { describe, it, expect } from 'vitest';

describe('areAllSafeCellsOpened', () => {
  it('returns false when some safe cells are closed', () => {
    const field: CellType[][] = getEmptyField(3, 3);
    field[1][1].isMine = true;
    field[0][0].isOpened = true;
    field[0][1].isOpened = true;

    expect(areAllSafeCellsOpened(field), 'returns true when some safe cells are closed').toBe(
      false,
    );
  });

  it('returns true when all safe cells are opened', () => {
    const field: CellType[][] = getEmptyField(3, 3);
    field[1][1].isMine = true;

    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
        if (field[y][x].isMine) {
          continue;
        }

        field[y][x].isOpened = true;
      }
    }

    expect(areAllSafeCellsOpened(field), 'returns false when all safe cells are opened').toBe(true);
  });
});
