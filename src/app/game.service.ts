import { Injectable } from '@angular/core';
import { Cell } from './cell';
import { Row } from './row';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getCells(): Cell[] {
    return [];
  }

  getRows(): Row[] {
    return [];
  }
}
