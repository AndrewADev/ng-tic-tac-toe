import {Mark} from './mark';

export class Cell {
    mark?: Mark;

    get hasMark(): Boolean {
        return this.mark !== null && this.mark !== undefined;
    }
}
