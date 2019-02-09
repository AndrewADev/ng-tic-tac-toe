import { TestBed, inject } from '@angular/core/testing';

import { PlayerTurnService } from './player-turn.service';

describe('PlayerTurnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerTurnService]
    });
  });

  it('should be created', inject([PlayerTurnService], (service: PlayerTurnService) => {
    expect(service).toBeTruthy();
  }));

  it('should toggle current player name when turn ended', inject([PlayerTurnService], (service: PlayerTurnService) => {
    const initialPlayer = service.getCurrentPlayerName();
    service.endTurn();
    expect(service.getCurrentPlayerName()).not.toEqual(initialPlayer);
  }));

  it('should toggle the current player mark when turn ended', inject([PlayerTurnService], (service: PlayerTurnService) => {
    const initialPlayer = service.getCurrentMark();
    service.endTurn();
    expect(service.getCurrentMark()).not.toEqual(initialPlayer);
  }));

  it('should call turnChange callback on endTurn()', inject([PlayerTurnService], (service: PlayerTurnService) => {
    const spyCallback = jasmine.createSpy('callback');
    service.addTurnChangeCallback(spyCallback);
    service.endTurn();
    expect(spyCallback).toHaveBeenCalled();
  }));
});
