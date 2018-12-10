import { Cell } from './cell';

export class Row {
    rank: number;
    // FIXME: this should be dynamic
    cells = [new Cell(), new Cell(), new Cell()];
}
