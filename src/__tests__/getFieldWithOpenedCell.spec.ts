import type { CellType } from '@/utils/types';
import { getEmptyField } from '@/utils/getEmptyField';
import { getCalculatedField } from '@/utils/getCalculatedField';
import { getFieldWithOpenedCell } from '@/utils/getFieldWithOpenedCell';
import { describe, it, expect } from 'vitest';

describe('getFieldWithOpenedCell', () => {
  it('opens an empty area when clicking on a cell with no adjacent mines', () => {
    const field: CellType[][] = getEmptyField(4, 4);
    field[1][2].isMine = true;
    const calculatedField: CellType[][] = getCalculatedField(field);
    const fieldWithOpenedCell: CellType[][] = getFieldWithOpenedCell(calculatedField, [1, 0]);

    expect(fieldWithOpenedCell[0][0].isOpened, "doesn't open suitable cell").toBe(true);
    expect(fieldWithOpenedCell[0][1].isOpened, "doesn't open suitable cell").toBe(true);
    expect(fieldWithOpenedCell[0][2].isOpened, 'opens wrong cell').toBe(false);
    expect(fieldWithOpenedCell[0][3].isOpened, 'opens wrong cell').toBe(false);

    expect(fieldWithOpenedCell[1][0].isOpened, "doesn't open suitable cell").toBe(true);
    expect(fieldWithOpenedCell[1][1].isOpened, "doesn't open suitable cell").toBe(true);
    expect(fieldWithOpenedCell[1][2].isOpened, 'opens wrong cell').toBe(false);
    expect(fieldWithOpenedCell[1][3].isOpened, 'opens wrong cell').toBe(false);

    expect(fieldWithOpenedCell[2][0].isOpened, "doesn't open suitable cell").toBe(true);
    expect(fieldWithOpenedCell[2][1].isOpened, "doesn't open suitable cell").toBe(true);
    expect(fieldWithOpenedCell[2][2].isOpened, "doesn't open suitable cell").toBe(true);
    expect(fieldWithOpenedCell[2][3].isOpened, "doesn't open suitable cell").toBe(true);

    expect(fieldWithOpenedCell[3][0].isOpened, "doesn't open suitable cell").toBe(true);
    expect(fieldWithOpenedCell[3][1].isOpened, "doesn't open suitable cell").toBe(true);
    expect(fieldWithOpenedCell[3][2].isOpened, "doesn't open suitable cell").toBe(true);
    expect(fieldWithOpenedCell[3][3].isOpened, "doesn't open suitable cell").toBe(true);
  });

  it('opens only the clicked cell when there are mines around it', () => {
    const field: CellType[][] = getEmptyField(4, 4);
    field[1][2].isMine = true;
    const calculatedField: CellType[][] = getCalculatedField(field);
    const fieldWithOpenedCell: CellType[][] = getFieldWithOpenedCell(calculatedField, [1, 1]);

    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        if (y === 1 && x === 1) {
          expect(fieldWithOpenedCell[y][x].isOpened, "doesn't open suitable cell").toBe(true);
        } else {
          expect(fieldWithOpenedCell[y][x].isOpened, 'opens wrong cell').toBe(false);
        }
      }
    }
  });
});
