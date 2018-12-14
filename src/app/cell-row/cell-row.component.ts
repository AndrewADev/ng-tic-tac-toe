import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

import { Cell } from '../shared/cell';

@Component({
  selector: 'app-cell-row',
  templateUrl: './cell-row.component.html',
  styleUrls: ['./cell-row.component.css']
})
export class CellRowComponent implements OnInit {

  cells: Cell[];

  constructor(public gameService: GameService) { }

  ngOnInit() {
    this.getCells();
  }

  getCells(): void {
    this.cells = this.gameService.getCells();
  }

}
