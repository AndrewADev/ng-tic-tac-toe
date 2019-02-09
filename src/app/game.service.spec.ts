import { TestBed, inject } from '@angular/core/testing';
import * as TypeMoq from 'typemoq';

import { GameService } from './game.service';
import { Cell } from './shared/cell';
import { Row } from './shared/row';
import { PlayerTurnService } from './player-turn.service';
import { Mark } from './shared/mark';

describe('GameService', () => {
  const mockPlayerTurnService = {
    addTurnChangeCallback( callback ) {},
    endGame() {},
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

  const winningRow = TypeMoq.Mock.ofType<Row>();
  winningRow.setup(x => x.hasWinCondition).returns((): Boolean => true);

  it('should end game when win condition detected', inject([GameService], (service: GameService) => {
    service.rows = [
      new Row(),
      winningRow.object,
      new Row()
    ];
    service.checkForWinConditions();
    expect(service.hasGameEnded).toBeTruthy();
  }));

  it('should notify turn service that turn has ended', () => {
    spyOn(mockPlayerTurnService, 'endGame');
    const sut = new GameService(mockPlayerTurnService as PlayerTurnService);
    sut.rows = [
      new Row(),
      winningRow.object,
      new Row()
    ];
    sut.checkForWinConditions();
    expect(mockPlayerTurnService.endGame).toHaveBeenCalled();
  });

  const firstMarkedRow = [ markedCell, new Cell(), new Cell()];
  const midMarkedRow = [new Cell(), markedCell, new Cell()];
  const lastMarkedRow = [new Cell(), new Cell(), markedCell];

  const colCases = [
    {
      name: 'first',
      data: [
        Object.assign(new Row(), {cells: firstMarkedRow}),
        Object.assign(new Row(), {cells: firstMarkedRow}),
        Object.assign(new Row(), {cells: firstMarkedRow}),
      ]
    },
    {
      name: 'middle',
      data: [
        Object.assign(new Row(), {cells: midMarkedRow}),
        Object.assign(new Row(), {cells: midMarkedRow}),
        Object.assign(new Row(), {cells: midMarkedRow}),
      ]
    },
    {
      name: 'last',
      data: [
        Object.assign(new Row(), {cells: lastMarkedRow}),
        Object.assign(new Row(), {cells: lastMarkedRow}),
        Object.assign(new Row(), {cells: lastMarkedRow}),
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
        Object.assign(new Row(), {cells: firstMarkedRow}),
        Object.assign(new Row(), {cells: midMarkedRow}),
        Object.assign(new Row(), {cells: lastMarkedRow})
      ]
    }, {
      name: 'upward',
      data: [
        Object.assign(new Row(), {cells: lastMarkedRow}),
        Object.assign(new Row(), {cells: midMarkedRow}),
        Object.assign(new Row(), {cells: firstMarkedRow})
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
