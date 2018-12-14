import { Injectable } from '@angular/core';
import { Cell } from './shared/cell';
import { Row } from './shared/row';
import { GameMode } from './shared/game-mode';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  cells = [];
  rows = [];
  private mode: GameMode = GameMode.LOBBY;

  constructor() { }

  getCells(): Cell[] {
    return [];
  }

  getRows(): Row[] {
    return [];
  }

  checkForWinConditions() {
    if (this.rows.reduce((accum, row) => accum || row.hasWinCondition)) {
      this.mode = GameMode.ENDED;
    }
  }

  get boardDimension(): Number {
    return this.cells.length;
  }

  get hasGameEnded(): Boolean {
    return this.mode.valueOf() === GameMode.ENDED;
  }
}
