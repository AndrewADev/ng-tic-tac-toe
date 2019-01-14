import { Cell } from '../app/shared/cell';
import { Row } from '../app/shared/row';

export class GameServiceStub {
    cells = [new Cell(), new Cell(), new Cell()];
    private active = true;

    getRows(): Row[] { return [new Row(), new Row(), new Row()]; }

    get boardDimension(): Number {
        return 3;
    }

    get hasGameEnded() { return !this.active; }

    toggleGameActive() { this.active = !this.active; }
}
