import { Cell } from '../app/cell';
import { Row } from '../app/row';

export class GameServiceStub {
    getRows(): Row[] { return [new Row(), new Row(), new Row()]; }

    getCells(): Cell[] { return [new Cell(), new Cell(), new Cell()]; }
}
