import type { CellType } from '@/utils/types';
import { getEmptyField } from '@/utils/getEmptyField';
import { getFieldWithMarkedCell } from '@/utils/getFieldWithMarkedCell';
import { describe, it, expect } from 'vitest';

describe('getFieldWithMarkedCell', () => {
  it('creates correct field with marked cell', () => {
    const emptyField: CellType[][] = getEmptyField(3, 3);

    expect(emptyField[0][0].isFlagMarked, 'cell initially flagged').toBe(false);
    expect(emptyField[0][0].isQuestionMarked, 'cell initially question marked').toBe(false);

    let fieldWithMarkedCell = getFieldWithMarkedCell(emptyField, [0, 0]);
    expect(fieldWithMarkedCell[0][0].isFlagMarked, 'cell not flagged after first click').toBe(true);
    expect(
      fieldWithMarkedCell[0][0].isQuestionMarked,
      'cell question marked after first click',
    ).toBe(false);

    fieldWithMarkedCell = getFieldWithMarkedCell(fieldWithMarkedCell, [0, 0]);
    expect(fieldWithMarkedCell[0][0].isFlagMarked, 'cell still flagged after second click').toBe(
      false,
    );
    expect(
      fieldWithMarkedCell[0][0].isQuestionMarked,
      'cell not question marked after second click',
    ).toBe(true);

    fieldWithMarkedCell = getFieldWithMarkedCell(fieldWithMarkedCell, [0, 0]);
    expect(fieldWithMarkedCell[0][0].isFlagMarked, 'cell flagged after third click').toBe(false);
    expect(
      fieldWithMarkedCell[0][0].isQuestionMarked,
      'cell question marked after third click',
    ).toBe(false);
  });
});
