import { Injectable } from '@angular/core';
import { Mark } from './shared/mark';

@Injectable({
  providedIn: 'root'
})
export class PlayerTurnService {
  // FIXME: types for these
  players = [
    {
      name: 'Player 1',
      mark: Mark.X,
    },
    {
      name: 'Player 2',
      mark: Mark.O
    }
  ];
  activeIdx = 0;

  private endTurnCallback: () => void = () => {};

  constructor() { }

  addTurnChangeCallback(callback: () => void) {
    this.endTurnCallback = callback;
  }

  getCurrentPlayerName() {
    return this.players[this.activeIdx].name;
  }

  getCurrentMark() {
    return this.players[this.activeIdx].mark;
  }

  endTurn() {
    this.endTurnCallback();
    this.activeIdx = (this.activeIdx === 0) ? 1 : 0;
  }
}
