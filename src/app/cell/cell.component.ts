import { Component, OnInit, Input } from '@angular/core';
import {Mark} from '../shared/mark';
import { PlayerTurnService } from 'src/app/player-turn.service';
import { Cell } from '../shared/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  mark?: Mark = null;

  @Input() cell: Cell;

  constructor(public playerTurnService: PlayerTurnService) {}

  ngOnInit() {
  }

  setMark(mark: Mark): Boolean {
    if (!this.cell.hasMark && this.playerTurnService.isGameActive) {
      this.cell.mark = mark;
      return true;
    }
    return false;
  }

  getMark(): string {
    if (this.cell.hasMark) {
      return this.cell.mark.valueOf() === Mark.X ? 'X' : 'O';
    }
    return '';
  }

  userClick() {
    if (this.setMark(this.playerTurnService.getCurrentMark())) {
      this.playerTurnService.endTurn();
    }
  }
}
