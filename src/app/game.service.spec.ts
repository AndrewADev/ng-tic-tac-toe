import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';
import { Cell } from './shared/cell';

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
});
