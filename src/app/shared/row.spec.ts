
import { GameServiceStub } from '../../testing/game-service.stub';
import { Cell } from '../shared/cell';
import { Mark } from '../shared/mark';
import { Row } from './row';

describe('CellRowComponent', () => {
  let sut;

  beforeEach(() => {
    sut = new Row();
  });

  it('should create', () => {
    expect(sut).toBeTruthy();
  });

  it('should return false for row win condition by default', () => {
    expect(sut.hasWinCondition).toBeFalsy();
  });

  it('should return false for mixed row contents', () => {
    const oCell = new Cell();
    oCell.mark = Mark.O;
    const xCell = new Cell();
    xCell.mark = Mark.X;
    sut.cells = [
      oCell,
      xCell,
      {...oCell}
    ];
    expect(sut.hasWinCondition).toBeFalsy();
  });

  it('should detect row win condition', () => {
    const cell = new Cell();
    cell.mark = Mark.O;

    sut.cells = [
      cell,
      Object.assign(cell, {mark: Mark.O}),
      Object.assign(cell, {mark: Mark.O})
    ];

    expect(sut.hasWinCondition).toBeTruthy();
  });
});
