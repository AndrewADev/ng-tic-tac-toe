import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Row } from '../shared/row';

@Component({
  selector: 'app-cell-grid',
  templateUrl: './cell-grid.component.html',
  styleUrls: ['./cell-grid.component.css']
})
export class CellGridComponent implements OnInit {
  rows: Row[];

  constructor(public gameService: GameService) { }

  ngOnInit() {
    this.getRows();
  }

  getRows() {
    this.rows = this.gameService.getRows();
  }

}
