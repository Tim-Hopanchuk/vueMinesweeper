import type { CellType } from '@/utils/types';

export function getMinedField(
  field: CellType[][],
  startCellIndex: [number, number],
  mines: number,
): CellType[][] {
  if (mines < 0) {
    throw new Error('Invalid mine count');
  }

  const minedField: CellType[][] = structuredClone(field);
  const height = minedField.length;
  const width = minedField[0].length;

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
    if (minedField[y][x].isMine) {
      continue;
    }

    minedField[y][x].isMine = true;
    currentMinesCount++;
  }

  return minedField;
}

export function getRandomIntUpTo(max: number): number {
  if (max < 0) {
    throw new Error('Invalid max value');
  }

  return Math.floor(Math.random() * (max + 1));
}
