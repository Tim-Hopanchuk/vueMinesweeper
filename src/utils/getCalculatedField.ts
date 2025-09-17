import type { CellType } from '@/utils/types';

export function getCalculatedField(field: CellType[][]): CellType[][] {
  const calculatedField: CellType[][] = structuredClone(field);
  const height = calculatedField.length;
  const width = calculatedField[0].length;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      calculatedField[y][x].adjacentMines = getAdjacentMines(calculatedField, [y, x]);
    }
  }

  return calculatedField;
}

function getAdjacentMines(field: CellType[][], index: [number, number]): number {
  const height = field.length;
  const width = field[0].length;
  let adjacentMines = 0;

  for (let yOffset = -1; yOffset < 2; yOffset++) {
    for (let xOffset = -1; xOffset < 2; xOffset++) {
      if (yOffset === 0 && xOffset === 0) {
        continue;
      }

      const currentIndex: [number, number] = [index[0] + yOffset, index[1] + xOffset];

      if (currentIndex[0] < 0 || currentIndex[1] < 0) {
        continue;
      }

      if (currentIndex[0] > height - 1 || currentIndex[1] > width - 1) {
        continue;
      }

      if (field[currentIndex[0]][currentIndex[1]].isMine) {
        adjacentMines++;
      }
    }
  }

  return adjacentMines;
}
