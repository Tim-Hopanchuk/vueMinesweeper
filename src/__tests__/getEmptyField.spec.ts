import type { CellType } from '@/utils/types';
import { getEmptyField } from '@/utils/getEmptyField';
import { describe, it, expect } from 'vitest';

describe('getEmptyField', () => {
  it('creates correct Easy field', () => {
    const width = 8;
    const height = 8;
    const field = getEmptyField(width, height);

    expect(field.length, 'creates Easy field with wrong height').toStrictEqual(height);
    expect(field[0].length, 'creates Easy field with wrong width').toStrictEqual(width);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        expect(field[y][x], 'creates Easy field with wrong cell properties').toStrictEqual({
          isOpened: false,
          isMine: false,
          isFlagMarked: false,
          isQuestionMarked: false,
          isExploded: false,
          adjacentMines: 0,
          index: [y, x],
        });
      }
    }
  });

  it('creates correct Medium field', () => {
    const width = 16;
    const height = 16;
    const field = getEmptyField(width, height);

    expect(field.length, 'creates Medium field with wrong height').toStrictEqual(height);
    expect(field[0].length, 'creates Medium field with wrong width').toStrictEqual(width);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        expect(field[y][x], 'creates Medium field with wrong cell properties').toStrictEqual({
          isOpened: false,
          isMine: false,
          isFlagMarked: false,
          isQuestionMarked: false,
          isExploded: false,
          adjacentMines: 0,
          index: [y, x],
        });
      }
    }
  });

  it('creates correct Hard field', () => {
    const width = 24;
    const height = 24;
    const field = getEmptyField(width, height);

    expect(field.length, 'creates Hard field with wrong height').toStrictEqual(height);
    expect(field[0].length, 'creates Hard field with wrong width').toStrictEqual(width);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        expect(field[y][x], 'creates Hard field with wrong cell properties').toStrictEqual({
          isOpened: false,
          isMine: false,
          isFlagMarked: false,
          isQuestionMarked: false,
          isExploded: false,
          adjacentMines: 0,
          index: [y, x],
        });
      }
    }
  });

  it('throws error for invalid width or height', () => {
    expect(() => getEmptyField(0, 8), "doesn't throw an error for invalid width").toThrowError(
      /^Invalid field's width or height$/,
    );

    expect(() => getEmptyField(16, -5), "doesn't throw an error for invalid height").toThrowError(
      /^Invalid field's width or height$/,
    );

    expect(() => getEmptyField(1, 1), "doesn't throw an error for invalid field size").toThrowError(
      /^Invalid field's width or height$/,
    );
  });
});
