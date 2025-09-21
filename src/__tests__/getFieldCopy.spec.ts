import type { CellType } from '@/utils/types';
import { getEmptyField } from '@/utils/getEmptyField';
import { getCalculatedField } from '@/utils/getCalculatedField';
import { getFieldCopy } from '@/utils/getFieldCopy';
import { describe, it, expect } from 'vitest';

describe('getFieldCopy', () => {
  it('creates correct field copy', () => {
    const field: CellType[][] = getEmptyField(3, 3);
    field[1][1].isMine = true;
    const calculatedField: CellType[][] = getCalculatedField(field);
    const fieldCopy: CellType[][] = getFieldCopy(calculatedField);

    expect(calculatedField, 'returns same object reference instead of creating copy').not.toBe(
      fieldCopy,
    );
    expect(calculatedField, 'copy content differs from original').toStrictEqual(fieldCopy);

    expect(calculatedField[1][1].index, 'returns same array reference for index property').not.toBe(
      fieldCopy[1][1].index,
    );
    expect(
      calculatedField[1][1].index,
      'index array content was changed during copying',
    ).toStrictEqual(fieldCopy[1][1].index);
  });

  it('copy is independent from original', () => {
    const field: CellType[][] = getEmptyField(3, 3);
    const fieldCopy: CellType[][] = getFieldCopy(field);

    field[1][1].isMine = true;

    expect(fieldCopy[1][1].isMine, 'copy was mutated when original was modified').toBe(false);
  });
});
