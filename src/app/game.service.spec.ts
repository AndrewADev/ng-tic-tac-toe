import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';
import { Cell } from './shared/cell';
import { Row } from './shared/row';
import { PlayerTurnService } from './player-turn.service';
import { Mark } from './shared/mark';

describe('GameService', () => {
  const mockPlayerTurnService = {
    addTurnChangeCallback( callback ) {},
  };
  const markedCell = new Cell();

  beforeEach(() => {
    markedCell.mark = Mark.O;
    TestBed.configureTestingModule({
      providers: [
        GameService,
        {provide: PlayerTurnService, useValue: mockPlayerTurnService}
      ]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));

  it('should return board dimension', inject([GameService], (service: GameService) => {
    service.rows = [new Row(), new Row(), new Row()];
    expect(service.boardDimension).toEqual(3);
  }));

  it('should register with turn service on init', inject([GameService], (service: GameService) => {
    spyOn(mockPlayerTurnService, 'addTurnChangeCallback');
    const sut = new GameService(mockPlayerTurnService as PlayerTurnService);
    expect(mockPlayerTurnService.addTurnChangeCallback).toHaveBeenCalled();
  }));

  it('should indicate game not ended by default', inject([GameService], (service: GameService) => {
    expect(service.hasGameEnded).toBeFalsy();
  }));

  it('should not end game when no win condition present', inject([GameService], (service: GameService) => {
    service.checkForWinConditions();
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

  const firstMarkedRow = [ markedCell, new Cell(), new Cell()];
  const midMarkedRow = [new Cell(), markedCell, new Cell()];
  const lastMarkedRow = [new Cell(), new Cell(), markedCell];

  const colCases = [
    {
      name: 'first',
      data: [
        {cells: firstMarkedRow},
        {cells: firstMarkedRow},
        {cells: firstMarkedRow},
      ]
    },
    {
      name: 'middle',
      data: [
        {cells: midMarkedRow},
        {cells: midMarkedRow},
        {cells: midMarkedRow},
      ]
    },
    {
      name: 'last',
      data: [
        {cells: lastMarkedRow},
        {cells: lastMarkedRow},
        {cells: lastMarkedRow},
      ]
    },
  ];
  colCases.forEach(testCase => {
    it(`should detect column win condition (${testCase.name})`, inject([GameService], (service: GameService) => {
      service.rows = testCase.data;
      service.checkForWinConditions();
      expect(service.hasGameEnded).toBeTruthy();
    }));
  });

  const diagCases = [
    {
      name: 'downward',
      data: [
        {cells: firstMarkedRow},
        {cells: midMarkedRow},
        {cells: lastMarkedRow}
      ]
    }, {
      name: 'upward',
      data: [
        {cells: lastMarkedRow},
        {cells: midMarkedRow},
        {cells: firstMarkedRow}
      ]
    }
  ];
  diagCases.forEach( testCase => {
    it(`should detect diagonal win condition (${testCase.name})`, inject([GameService], (service: GameService) => {
      service.rows = testCase.data;
      service.checkForWinConditions();
      expect(service.hasGameEnded).toBeTruthy();
    }));
  });
});
