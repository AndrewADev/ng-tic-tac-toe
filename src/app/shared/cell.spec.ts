
import { By } from '@angular/platform-browser';
import { Cell } from './cell';
import { Mark } from './mark';


describe('Cell model', () => {
  let cell;
  beforeEach(() => {
    cell = new Cell();
  });

  it('should create', () => {
    expect(cell).toBeTruthy();
  });

  it('should return false for hasMark by default', () => {
    expect(cell.hasMark).toBeFalsy();
  });

  it('should return true for hasMark after mark has been set', () => {
    cell.mark = Mark.O;
    expect(cell.hasMark).toBeTruthy();
  });
});
