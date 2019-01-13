import { Injectable } from '@angular/core';
import { Cell } from './shared/cell';
import { Row } from './shared/row';
import { GameMode } from './shared/game-mode';
import { PlayerTurnService } from './player-turn.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  cells = [];
  rows = [];
  private mode: GameMode = GameMode.LOBBY;

  constructor(public turnService: PlayerTurnService) {
    this.turnService.addTurnChangeCallback(this.checkForWinConditions);
  }

  getCells(): Cell[] {
    return [];
  }

  getRows(): Row[] {
    return [];
  }

  checkForWinConditions() {
    if (this.hasRowWinCondition) {
      this.mode = GameMode.ENDED;
    }
  }

  get boardDimension(): Number {
    return this.cells.length;
  }

  get hasGameEnded(): Boolean {
    return this.mode.valueOf() === GameMode.ENDED;
  }

  private get hasRowWinCondition(): Boolean {
    return this.rows.reduce((accum, row) => accum || row.hasWinCondition);
  }
}
