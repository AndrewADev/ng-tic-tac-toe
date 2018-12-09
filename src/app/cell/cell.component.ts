import { Component, OnInit } from '@angular/core';
import {Mark} from '../mark';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  mark?: Mark = null;

  constructor() {}

  ngOnInit() {
  }

  setMark(mark: Mark) {
    this.mark = mark;
  }

  getMark(): string {
    if (this.mark !== null) {
      return this.mark.valueOf() === Mark.X ? 'X' : 'O';
    }
    return '';
  }
}
