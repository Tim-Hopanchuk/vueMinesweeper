import type { CellType } from '@/utils/types';
import { getEmptyField } from '@/utils/getEmptyField';
import { getMinedField, getRandomIntUpTo } from '@/utils/getMinedField';
import { describe, it, expect } from 'vitest';

describe('getMinedField', () => {
  it('creates correct Easy mined field', () => {
    const width = 8;
    const height = 8;
    const mines = 10;

    const emptyField = getEmptyField(width, height);
    const minedField = getMinedField(emptyField, [4, 5], mines);

    let actualMines = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (minedField[y][x].isMine) {
          actualMines++;
        }

        for (let key in minedField[y][x]) {
          if (key === 'isMine') {
            continue;
          }

          expect(minedField[y][x][key as keyof CellType], 'changes properties besides isMine').toBe(
            emptyField[y][x][key as keyof CellType],
          );
        }
      }
    }

    expect(actualMines, 'places incorrect number of mines').toBe(mines);
    expect(minedField[4][5].isMine, 'places mine to the start cell').toBe(false);
  });

  it('creates correct Medium mined field', () => {
    const width = 16;
    const height = 16;
    const mines = 40;

    const emptyField = getEmptyField(width, height);
    const minedField = getMinedField(emptyField, [0, 0], mines);

    let actualMines = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (minedField[y][x].isMine) {
          actualMines++;
        }

        for (let key in minedField[y][x]) {
          if (key === 'isMine') {
            continue;
          }

          expect(minedField[y][x][key as keyof CellType], 'changes properties besides isMine').toBe(
            emptyField[y][x][key as keyof CellType],
          );
        }
      }
    }

    expect(actualMines, 'places incorrect number of mines').toBe(mines);
    expect(minedField[0][0].isMine, 'places mine to the start cell').toBe(false);
  });

  it('creates correct Hard mined field', () => {
    const width = 24;
    const height = 24;
    const mines = 99;

    const emptyField = getEmptyField(width, height);
    const minedField = getMinedField(emptyField, [1, 0], mines);

    let actualMines = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (minedField[y][x].isMine) {
          actualMines++;
        }

        for (let key in minedField[y][x]) {
          if (key === 'isMine') {
            continue;
          }

          expect(minedField[y][x][key as keyof CellType], 'changes properties besides isMine').toBe(
            emptyField[y][x][key as keyof CellType],
          );
        }
      }
    }

    expect(actualMines, 'places incorrect number of mines').toBe(mines);
    expect(minedField[1][0].isMine, 'places mine to the start cell').toBe(false);
  });

  it('throws error for invalid mines amount', () => {
    const width = 8;
    const height = 8;
    const emptyField = getEmptyField(width, height);

    expect(
      () => getMinedField(emptyField, [4, 5], 64),
      "doesn't throw error when mine count equals cell count",
    ).toThrowError(/^Invalid mine count$/);

    expect(
      () => getMinedField(emptyField, [4, 5], 70),
      "doesn't throw error when mine count exceeds cell count",
    ).toThrowError(/^Invalid mine count$/);

    expect(
      () => getMinedField(emptyField, [4, 5], -5),
      "doesn't throw error when mine count is negative",
    ).toThrowError(/^Invalid mine count$/);
  });
});

describe('getRandomIntUpTo', () => {
  it('generates correct random integer', () => {
    for (let i = 0; i < 100; i++) {
      const randomInt = getRandomIntUpTo(8);

      expect(randomInt, 'generates integer less than 0').toBeGreaterThanOrEqual(0);
      expect(randomInt, 'generates integer greater than max').toBeLessThanOrEqual(8);
      expect(randomInt % 1, 'generates non-integer').toBe(0);
    }

    for (let i = 0; i < 100; i++) {
      const randomInt = getRandomIntUpTo(16);

      expect(randomInt, 'generates integer less than 0').toBeGreaterThanOrEqual(0);
      expect(randomInt, 'generates integer greater than max').toBeLessThanOrEqual(16);
      expect(randomInt % 1, 'generates non-integer').toBe(0);
    }

    for (let i = 0; i < 100; i++) {
      const randomInt = getRandomIntUpTo(24);

      expect(randomInt, 'generates integer less than 0').toBeGreaterThanOrEqual(0);
      expect(randomInt, 'generates integer greater than max').toBeLessThanOrEqual(24);
      expect(randomInt % 1, 'generates non-integer').toBe(0);
    }
  });

  it('throws error for max less than 0', () => {
    expect(() => getRandomIntUpTo(-5), "doesn't throw error when max is negative").toThrowError(
      /^Invalid max value$/,
    );
  });
});
