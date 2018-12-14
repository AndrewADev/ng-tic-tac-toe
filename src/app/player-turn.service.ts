import { Injectable } from '@angular/core';
import { Mark } from './shared/mark';

@Injectable({
  providedIn: 'root'
})
export class PlayerTurnService {
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

  constructor() { }

  getCurrentPlayerName() {
    return this.players[this.activeIdx].name;
  }

  getCurrentMark() {
    return this.players[this.activeIdx].mark;
  }

  endTurn() {
    this.activeIdx = (this.activeIdx === 0) ? 1 : 0;
  }
}
