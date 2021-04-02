import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellGridComponent } from './cell-grid.component';
import { By } from '@angular/platform-browser';

import { CellRowComponent } from '../cell-row/cell-row.component';
import { CellComponent } from '../cell/cell.component';
import { GameService } from '../game.service';
import { GameServiceStub } from '../../testing/game-service.stub';

describe('CellGridComponent', () => {
  let component: CellGridComponent;
  let fixture: ComponentFixture<CellGridComponent>;
  let rowEls;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CellComponent,
        CellGridComponent,
        CellRowComponent,
      ],
      providers: [
        {provide: GameService, useValue: new GameServiceStub()},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    rowEls = fixture.debugElement.queryAll(By.css('.grid-row'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should create one row element for each returned from service', () => {
    expect(rowEls.length).toEqual(3);
  });
});
