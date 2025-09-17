import type { CellType } from '@/utils/types';

export function getMinedField(
  field: CellType[][],
  startCellIndex: [number, number],
  mines: number,
): CellType[][] {
  if (mines < 0) {
    throw new Error('Invalid mine count');
  }

  const height = field.length;
  const width = field[0].length;

  if (mines > height * width - 1) {
    throw new Error('Invalid mine count');
  }

  let currentMinesCount = 0;
  while (currentMinesCount < mines) {
    let y = getRandomIntUpTo(height - 1);
    let x = getRandomIntUpTo(width - 1);

    if (startCellIndex[0] === y && startCellIndex[1] === x) {
      continue;
    }
    if (field[y][x].isMine) {
      continue;
    }

    field[y][x].isMine = true;
    currentMinesCount++;
  }

  return field;
}

export function getRandomIntUpTo(max: number): number {
  if (max < 0) {
    throw new Error('Invalid max value');
  }

  return Math.floor(Math.random() * (max + 1));
}
