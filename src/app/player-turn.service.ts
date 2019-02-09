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
  private activeIdx = 0;
  private gameOver = false;

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

  get isGameActive() {
    return !this.gameOver;
  }

  endTurn() {
    this.endTurnCallback();
    this.activeIdx = (this.activeIdx === 0) ? 1 : 0;
  }

  endGame() {
    this.gameOver = true;
  }
}
