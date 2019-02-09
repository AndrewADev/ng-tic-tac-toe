import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';

import { Cell } from '../shared/cell';

@Component({
  selector: 'app-cell-row',
  templateUrl: './cell-row.component.html',
  styleUrls: ['./cell-row.component.css']
})
export class CellRowComponent {

  @Input() cells: Cell[];
}
