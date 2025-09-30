import type { CellType } from '@/utils/types';
import { getEmptyField } from '@/utils/getEmptyField';
import { getMinedField } from '@/utils/getMinedField';
import { getFieldWithOpenedMines } from '@/utils/getFieldWithOpenedMines';
import { describe, it, expect } from 'vitest';

describe('getFieldWithOpenedMines', () => {
  it('creates correct Easy field with opened mines', () => {
    const width = 8;
    const height = 8;
    const mines = 10;

    const emptyField: CellType[][] = getEmptyField(width, height);
    const minedField: CellType[][] = getMinedField(emptyField, [4, 5], mines);
    const fieldWithOpenedMines: CellType[][] = getFieldWithOpenedMines(minedField, [5, 5]);

    expect(fieldWithOpenedMines[5][5].isExploded, "doesn't mark target mine as exploded").toBe(
      true,
    );

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (fieldWithOpenedMines[y][x].isMine) {
          expect(fieldWithOpenedMines[y][x].isOpened, "doesn't open mine").toBe(true);
        }
      }
    }
  });

  it('creates correct Medium field with opened mines', () => {
    const width = 16;
    const height = 16;
    const mines = 40;

    const emptyField: CellType[][] = getEmptyField(width, height);
    const minedField: CellType[][] = getMinedField(emptyField, [0, 0], mines);
    const fieldWithOpenedMines: CellType[][] = getFieldWithOpenedMines(minedField, [1, 1]);

    expect(fieldWithOpenedMines[1][1].isExploded, "doesn't mark target mine as exploded").toBe(
      true,
    );

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (fieldWithOpenedMines[y][x].isMine) {
          expect(fieldWithOpenedMines[y][x].isOpened, "doesn't open mine").toBe(true);
        }
      }
    }
  });

  it('creates correct Hard field with opened mines', () => {
    const width = 24;
    const height = 24;
    const mines = 99;

    const emptyField: CellType[][] = getEmptyField(width, height);
    const minedField: CellType[][] = getMinedField(emptyField, [10, 10], mines);
    const fieldWithOpenedMines: CellType[][] = getFieldWithOpenedMines(minedField, [10, 15]);

    expect(fieldWithOpenedMines[10][15].isExploded, "doesn't mark target mine as exploded").toBe(
      true,
    );

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (fieldWithOpenedMines[y][x].isMine) {
          expect(fieldWithOpenedMines[y][x].isOpened, "doesn't open mine").toBe(true);
        }
      }
    }
  });

  it("doesn't open flag marked cells", () => {
    const width = 8;
    const height = 8;
    const mines = 10;

    const emptyField: CellType[][] = getEmptyField(width, height);
    const minedField: CellType[][] = getMinedField(emptyField, [4, 5], mines);

    minedField[0][0].isFlagMarked = true;
    minedField[1][1].isFlagMarked = true;
    minedField[2][2].isFlagMarked = true;

    const fieldWithOpenedMines: CellType[][] = getFieldWithOpenedMines(minedField, [5, 5]);

    expect(fieldWithOpenedMines[5][5].isExploded, "doesn't mark target mine as exploded").toBe(
      true,
    );

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (fieldWithOpenedMines[y][x].isMine && !fieldWithOpenedMines[y][x].isFlagMarked) {
          expect(fieldWithOpenedMines[y][x].isOpened, "doesn't open mine").toBe(true);
        }
        if (fieldWithOpenedMines[y][x].isMine && fieldWithOpenedMines[y][x].isFlagMarked) {
          expect(fieldWithOpenedMines[y][x].isOpened, 'opens flag marked mine').toBe(false);
        }
      }
    }
  });
});
