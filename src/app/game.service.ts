import { Injectable } from '@angular/core';
import { Cell } from './shared/cell';
import { Row } from './shared/row';
import { GameMode } from './shared/game-mode';
import { PlayerTurnService } from './player-turn.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  rows = [
    new Row(),
    new Row(),
    new Row()
  ];
  private mode: GameMode = GameMode.LOBBY;

  constructor(public turnService: PlayerTurnService) {
    this.turnService.addTurnChangeCallback(this.checkForWinConditions);
  }

  getRows(): Row[] {
    return this.rows;
  }

  checkForWinConditions = () => {
    if (this.hasRowWinCondition || this.hasColWinCondition || this.hasDiagonalWinCondition) {
      this.mode = GameMode.ENDED;
      this.turnService.endGame();
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
    for (let i = 0; i <= maxIdx; i++) {
      if (!this.rows[0] || !this.rows[0].cells[i]) { break; }
      const initialMark = this.rows[0].cells[i].mark;
      if (this.rows.every(row => row && row.cells[i].hasMark && row.cells[i].mark.valueOf() === initialMark.valueOf())) {
        return true;
      }
    }
    return false;
  }

  private get hasDiagonalWinCondition(): Boolean {
    const maxIdx: number = Math.max(+this.boardDimension - 1, 0);
    if (!this.rows[0] || !this.rows[0].cells || !this.rows[0].cells[0]) { return false; }
    const firstMark = this.rows[0].cells[0].mark;
    if (
      firstMark !== null
      && firstMark !== undefined
      && this.rows.every(
        (row, idx) =>
          row
          && row.cells[idx].mark !== undefined
          && row.cells[idx].mark !== null
          && row.cells[idx].mark.valueOf() === firstMark.valueOf()
        )
      ) {
      return true;
    } else if (!this.rows[0].cells[maxIdx]) {
      return false;
    }
    const lastMark = this.rows[0].cells[maxIdx].mark;
    return lastMark !== null
      && lastMark !== undefined
      && this.rows.every(
        (row, idx) =>
          row
          && row.cells[maxIdx - idx].mark !== undefined
          && row.cells[maxIdx - idx].mark !== null
          && row.cells[maxIdx - idx].mark.valueOf() === lastMark.valueOf()
        );
  }

  private get hasRowWinCondition(): boolean {
    return this.rows.some(row => row.hasWinCondition);
  }
}
