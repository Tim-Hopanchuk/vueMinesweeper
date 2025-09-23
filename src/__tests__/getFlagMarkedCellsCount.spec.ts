import type { CellType } from '@/utils/types';
import { getEmptyField } from '@/utils/getEmptyField';
import { getFlagMarkedCellsCount } from '@/utils/getFlagMarkedCellsCount';
import { describe, it, expect } from 'vitest';

describe('getFlagMarkedCellsCount', () => {
  it('counts correct number of flag marked cells', () => {
    const field: CellType[][] = getEmptyField(3, 3);
    field[0][0].isFlagMarked = true;
    field[1][1].isFlagMarked = true;
    field[2][2].isFlagMarked = true;

    expect(getFlagMarkedCellsCount(field), 'counts wrong number of flag marked cells').toBe(3);
  });
});
