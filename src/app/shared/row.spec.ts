
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

  it('should detect row win condition', () => {
    const cell = new Cell();
    cell.mark = Mark.O;

    // const fixedService = new GameServiceStub();
    sut.cells = [
      cell,
      Object.create(cell),
      Object.create(cell)
    ];

    expect(sut.hasWinCondition).toBeTruthy();
  });
});
