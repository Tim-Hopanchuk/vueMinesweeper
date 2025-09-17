import type { CellType } from '@/utils/types';

export function getFieldWithOpenedCell(field: CellType[][], index: [number, number]): CellType[][] {
  const height = field.length;
  const width = field[0].length;

  const queue: [number, number][] = [index];
  const visited = new Set<string>();

  for (let i = 0; i < queue.length; i++) {
    const y = queue[i][0];
    const x = queue[i][1];

    field[y][x].isOpened = true;
    visited.add(y + '.' + x);

    if (field[y][x].adjacentMines > 0) {
      continue;
    }

    for (let yOffset = -1; yOffset < 2; yOffset++) {
      for (let xOffset = -1; xOffset < 2; xOffset++) {
        const currentY = y + yOffset;
        const currentX = x + xOffset;

        if (visited.has(currentY + '.' + currentX)) {
          continue;
        }
        if (currentX < 0 || currentX > width - 1) {
          continue;
        }
        if (currentY < 0 || currentY > height - 1) {
          continue;
        }

        queue.push([currentY, currentX]);
      }
    }
  }

  return field;
}
