import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';
import { Cell } from './shared/cell';
import { Row } from './shared/row';

describe('GameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  it('should return board dimension', inject([GameService], (service: GameService) => {
    service.cells = [new Cell(), new Cell(), new Cell()];
    expect(service.boardDimension).toEqual(3);
  }));

  it('should indicate game not ended by default', inject([GameService], (service: GameService) => {
    expect(service.hasGameEnded).toBeFalsy();
  }));

  it('should end game when win condition detected', inject([GameService], (service: GameService) => {
    const winningRow = {
      hasWinCondition: true
    };
    service.rows = [
      new Row(),
      winningRow,
      new Row()
    ];
    service.checkForWinConditions();
    expect(service.hasGameEnded).toBeTruthy();
  }));
});
