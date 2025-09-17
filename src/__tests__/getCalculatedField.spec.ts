import type { CellType } from '@/utils/types';
import { getEmptyField } from '@/utils/getEmptyField';
import { getCalculatedField } from '@/utils/getCalculatedField';
import { describe, it, expect } from 'vitest';

describe('getCalculatedField', () => {
  it('counts adjacent mines value around 1 mine correctly', () => {
    const field: CellType[][] = getEmptyField(4, 4);

    field[1][2].isMine = true;

    const calculatedField = getCalculatedField(field);

    expect(calculatedField[0][0].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[0][1].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[0][2].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[0][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);

    expect(calculatedField[1][0].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[1][1].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[1][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);

    expect(calculatedField[2][0].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[2][1].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[2][2].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[2][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);

    expect(calculatedField[3][0].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[3][1].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[3][2].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[3][3].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
  });

  it('counts adjacent mines value around 2 mine correctly', () => {
    const field: CellType[][] = getEmptyField(4, 4);

    field[0][0].isMine = true;

    field[2][2].isMine = true;

    const calculatedField = getCalculatedField(field);

    expect(calculatedField[0][1].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[0][2].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[0][3].adjacentMines, 'counts wrong adjacent mines value').toBe(0);

    expect(calculatedField[1][0].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[1][1].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[1][2].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[1][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);

    expect(calculatedField[2][0].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[2][1].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[2][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);

    expect(calculatedField[3][0].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[3][1].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[3][2].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[3][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
  });

  it('counts adjacent mines value around 3 mine correctly', () => {
    const field: CellType[][] = getEmptyField(4, 4);

    field[2][1].isMine = true;
    field[2][2].isMine = true;
    field[2][3].isMine = true;

    const calculatedField = getCalculatedField(field);

    expect(calculatedField[0][0].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[0][1].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[0][2].adjacentMines, 'counts wrong adjacent mines value').toBe(0);
    expect(calculatedField[0][3].adjacentMines, 'counts wrong adjacent mines value').toBe(0);

    expect(calculatedField[1][0].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[1][1].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[1][2].adjacentMines, 'counts wrong adjacent mines value').toBe(3);
    expect(calculatedField[1][3].adjacentMines, 'counts wrong adjacent mines value').toBe(2);

    expect(calculatedField[2][0].adjacentMines, 'counts wrong adjacent mines value').toBe(1);

    expect(calculatedField[3][0].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[3][1].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[3][2].adjacentMines, 'counts wrong adjacent mines value').toBe(3);
    expect(calculatedField[3][3].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
  });

  it('counts adjacent mines value around 4 mine correctly', () => {
    const field: CellType[][] = getEmptyField(4, 4);

    field[0][1].isMine = true;

    field[1][0].isMine = true;
    field[1][2].isMine = true;

    field[2][1].isMine = true;

    const calculatedField = getCalculatedField(field);

    expect(calculatedField[0][0].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[0][2].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[0][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);

    expect(calculatedField[1][1].adjacentMines, 'counts wrong adjacent mines value').toBe(4);
    expect(calculatedField[1][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);

    expect(calculatedField[2][0].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[2][2].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[2][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);

    expect(calculatedField[3][0].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[3][1].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[3][2].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
  });

  it('counts adjacent mines value around 5 mine correctly', () => {
    const field: CellType[][] = getEmptyField(4, 4);

    field[1][0].isMine = true;
    field[1][2].isMine = true;

    field[2][2].isMine = true;

    field[3][0].isMine = true;
    field[3][2].isMine = true;

    const calculatedField = getCalculatedField(field);

    expect(calculatedField[0][0].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[0][1].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[0][2].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[0][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);

    expect(calculatedField[1][1].adjacentMines, 'counts wrong adjacent mines value').toBe(3);
    expect(calculatedField[1][3].adjacentMines, 'counts wrong adjacent mines value').toBe(2);

    expect(calculatedField[2][0].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[2][1].adjacentMines, 'counts wrong adjacent mines value').toBe(5);
    expect(calculatedField[2][3].adjacentMines, 'counts wrong adjacent mines value').toBe(3);

    expect(calculatedField[3][1].adjacentMines, 'counts wrong adjacent mines value').toBe(3);
    expect(calculatedField[3][3].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
  });

  it('counts adjacent mines value around 6 mine correctly', () => {
    const field: CellType[][] = getEmptyField(4, 4);

    field[0][2].isMine = true;
    field[0][3].isMine = true;

    field[1][1].isMine = true;
    field[1][3].isMine = true;

    field[2][1].isMine = true;
    field[2][2].isMine = true;

    const calculatedField = getCalculatedField(field);

    expect(calculatedField[0][0].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[0][1].adjacentMines, 'counts wrong adjacent mines value').toBe(2);

    expect(calculatedField[1][0].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[1][2].adjacentMines, 'counts wrong adjacent mines value').toBe(6);

    expect(calculatedField[2][0].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[2][3].adjacentMines, 'counts wrong adjacent mines value').toBe(2);

    expect(calculatedField[3][0].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[3][1].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[3][2].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[3][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
  });

  it('counts adjacent mines value around 7 mine correctly', () => {
    const field: CellType[][] = getEmptyField(4, 4);

    field[1][1].isMine = true;
    field[1][2].isMine = true;
    field[1][3].isMine = true;

    field[2][1].isMine = true;
    field[2][3].isMine = true;

    field[3][1].isMine = true;
    field[3][2].isMine = true;

    const calculatedField = getCalculatedField(field);

    expect(calculatedField[0][0].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
    expect(calculatedField[0][1].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[0][2].adjacentMines, 'counts wrong adjacent mines value').toBe(3);
    expect(calculatedField[0][3].adjacentMines, 'counts wrong adjacent mines value').toBe(2);

    expect(calculatedField[1][0].adjacentMines, 'counts wrong adjacent mines value').toBe(2);

    expect(calculatedField[2][0].adjacentMines, 'counts wrong adjacent mines value').toBe(3);
    expect(calculatedField[2][2].adjacentMines, 'counts wrong adjacent mines value').toBe(7);

    expect(calculatedField[3][0].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[3][3].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
  });

  it('counts adjacent mines value around 8 mine correctly', () => {
    const field: CellType[][] = getEmptyField(4, 4);

    field[0][0].isMine = true;
    field[0][1].isMine = true;
    field[0][2].isMine = true;

    field[1][0].isMine = true;
    field[1][2].isMine = true;

    field[2][0].isMine = true;
    field[2][1].isMine = true;
    field[2][2].isMine = true;

    const calculatedField = getCalculatedField(field);

    expect(calculatedField[0][3].adjacentMines, 'counts wrong adjacent mines value').toBe(2);

    expect(calculatedField[1][1].adjacentMines, 'counts wrong adjacent mines value').toBe(8);
    expect(calculatedField[1][3].adjacentMines, 'counts wrong adjacent mines value').toBe(3);

    expect(calculatedField[2][3].adjacentMines, 'counts wrong adjacent mines value').toBe(2);

    expect(calculatedField[3][0].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[3][1].adjacentMines, 'counts wrong adjacent mines value').toBe(3);
    expect(calculatedField[3][2].adjacentMines, 'counts wrong adjacent mines value').toBe(2);
    expect(calculatedField[3][3].adjacentMines, 'counts wrong adjacent mines value').toBe(1);
  });
});
