import { Injectable } from '@angular/core';
import { Cell } from './cell';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getCells(): Cell[] {
    return [];
  }
}
