import { Injectable } from '@angular/core';
import { Cell } from './shared/cell';
import { Row } from './shared/row';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  cells = [];

  constructor() { }

  getCells(): Cell[] {
    return [];
  }

  getRows(): Row[] {
    return [];
  }

  get boardDimension(): Number {
    return this.cells.length;
  }
}
