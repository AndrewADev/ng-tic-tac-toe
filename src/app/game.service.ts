import { Injectable } from '@angular/core';
import { Cell } from './shared/cell';
import { Row } from './shared/row';
import { GameMode } from './shared/game-mode';
import { PlayerTurnService } from './player-turn.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
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
    if (this.hasRowWinCondition || this.hasColWinCondition) {
      this.mode = GameMode.ENDED;
    }
  }

  get boardDimension(): Number {
    return this.rows[0] && this.rows[0].cells ? this.rows[0].cells.length : 0;
  }

  get hasGameEnded(): Boolean {
    return this.mode.valueOf() === GameMode.ENDED;
  }

  private get hasColWinCondition(): Boolean {
    const maxIdx: Number = Math.max(+this.boardDimension - 1, 0);
    for (let i = 0; i < maxIdx; i++) {
      const initialMark = this.rows[0].cells[i].mark;
      if (this.rows.every(row => row && row.cells[i].mark.valueOf() === initialMark.valueOf())) {
        return true;
      }
    }
    return false;
  }

  private get hasRowWinCondition(): Boolean {
    return this.rows.reduce((accum, row) => accum || row.hasWinCondition, false);
  }
}
