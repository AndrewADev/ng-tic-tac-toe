
import { GameServiceStub } from '../../testing/game-service.stub';
import { Cell } from '../shared/cell';
import { Mark } from '../shared/mark';
import { Row } from './row';

describe('CellRowComponent', () => {
  let sut: Row;

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
      Object.assign(oCell)
    ];
    expect(sut.hasWinCondition).toBeFalsy();
  });

  const markTypes = [
    {
      data: Mark.O
    },
    {
      data: Mark.X
    }
  ];
  markTypes.forEach( type => {
    it(`should detect row win condition (Mark val ${type.data})`, () => {
      const cell = new Cell();
      cell.mark = type.data;

      sut.cells = [
        cell,
        Object.assign(cell, {mark: type.data}),
        Object.assign(cell, {mark: type.data})
      ];

      expect(sut.hasWinCondition).toBeTruthy();
    });
  });
});
