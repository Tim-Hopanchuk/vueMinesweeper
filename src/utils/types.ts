export interface CellType {
  isOpened: boolean;
  isMine: boolean;
  isFlagged: boolean;
  isQuestioned: boolean;
  isExploded: boolean;
  minesAround: number;
  index: [number, number];
}
