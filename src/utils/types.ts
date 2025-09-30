export interface CellType {
  isOpened: boolean;
  isMine: boolean;
  isFlagMarked: boolean;
  isQuestionMarked: boolean;
  isExploded: boolean;
  adjacentMines: number;
  index: [number, number];
}

export type GameStateType = 'idle' | 'running' | 'ended';
export type SmileStateType = 'neutral' | 'win' | 'lose';
export type DifficultyType = 'easy' | 'medium' | 'hard';
