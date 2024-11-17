import { WinMatrixType } from './type'

export const winMatrixData: WinMatrixType = {
  topCenter: {
    matrix: [0, 1, 0, 0, 1, 0, 0, 1, 0],
    win: 150,
  },
  topRight: {
    matrix: [0, 0, 1, 0, 0, 1, 0, 0, 1],
    win: 150,
  },
  topLeft: {
    matrix: [1, 0, 0, 1, 0, 0, 1, 0, 0],
    win: 150,
  },
  horizonTop: {
    matrix: [1, 1, 1, 0, 0, 0, 0, 0, 0],
    win: 150,
  },
  horizonMiddle: {
    matrix: [0, 0, 0, 1, 1, 1, 0, 0, 0],
    win: 150,
  },
  horizonBottom: {
    matrix: [0, 0, 0, 0, 0, 0, 1, 1, 1],
    win: 150,
  },
  leftCorner: {
    matrix: [1, 0, 0, 0, 1, 0, 1, 0, 0],
    win: 150,
  },
  rightCorner: {
    matrix: [0, 0, 1, 0, 1, 0, 0, 0, 1],
    win: 150,
  },
  topCorner: {
    matrix: [1, 0, 1, 0, 1, 0, 0, 0, 0],
    win: 150,
  },
  bottomCorner: {
    matrix: [0, 0, 0, 0, 1, 0, 1, 0, 1],
    win: 150,
  },
  centerCornerLeft: {
    matrix: [0, 1, 0, 1, 0, 0, 0, 1, 0],
    win: 150,
  },
  centerCornerRight: {
    matrix: [0, 1, 0, 0, 0, 1, 0, 1, 0],
    win: 150,
  },
  middleCorenerBottom: {
    matrix: [0, 0, 0, 1, 0, 1, 0, 1, 0],
    win: 150,
  },
  middleCorenerTop: {
    matrix: [0, 1, 0, 1, 0, 1, 0, 0, 0],
    win: 150,
  },
  diagonalOne: {
    matrix: [1, 0, 0, 0, 1, 0, 0, 0, 1],
    win: 300,
  },
  diagonalTwo: {
    matrix: [0, 0, 1, 0, 1, 0, 1, 0, 0],
    win: 300,
  },
  corener: {
    matrix: [1, 0, 1, 0, 0, 0, 1, 0, 1],
    win: 150,
  },
}
