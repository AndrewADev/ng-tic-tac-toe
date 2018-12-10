import {Cell} from '../app/cell';
import { of, Observable } from 'rxjs';


export class GameServiceStub {
    // getRows(): Cell[] { return of([new Cell(), new Cell(), new Cell()]); }

    getCells(): Cell[] { return [new Cell(), new Cell(), new Cell()]; }
}
