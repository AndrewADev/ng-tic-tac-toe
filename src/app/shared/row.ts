import { Cell } from './cell';

export class Row {
    rank: number;
    dimension = 3;
    // FIXME: this should be dynamic
    cells = [new Cell(), new Cell(), new Cell()];

    get hasWinCondition(): Boolean {
        if (!this.cells || this.cells.length < 1) {
            return false;
        }
        return this.cells.filter( c => c.mark !== null && c.mark !== undefined).length === this.dimension
            && this.allCellsHaveSameTruthyMark;
    }

    private get allCellsHaveSameTruthyMark(): Boolean {
        if (!this.cells[0] || !this.cells[0].mark) { return false; }
        const firstMark = this.cells[0].mark;
        return this.cells.every( cell => cell.mark && cell.mark.valueOf() === firstMark.valueOf());
    }
}
