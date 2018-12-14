import { Component, OnInit } from '@angular/core';
import {Mark} from '../shared/mark';
import { PlayerTurnService } from 'src/app/player-turn.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  mark?: Mark = null;

  constructor(public playerTurnService: PlayerTurnService) {}

  ngOnInit() {
  }

  setMark(mark: Mark): Boolean {
    if (this.mark == null) {
      this.mark = mark;
      return true;
    }
    return false;
  }

  getMark(): string {
    if (this.mark !== null) {
      return this.mark.valueOf() === Mark.X ? 'X' : 'O';
    }
    return '';
  }

  userClick() {
    if (this.setMark(this.playerTurnService.getCurrentMark())) {
      this.playerTurnService.endTurn();
    }
  }
}
