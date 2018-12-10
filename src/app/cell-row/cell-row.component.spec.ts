import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellRowComponent } from './cell-row.component';
import { CellComponent } from '../cell/cell.component';

import { GameServiceStub } from '../../testing/game-service.stub';
import { GameService } from '../game.service';
import { By } from '@angular/platform-browser';

describe('CellRowComponent', () => {
  let component: CellRowComponent;
  let fixture: ComponentFixture<CellRowComponent>;
  const gameServiceStub = new GameServiceStub();
  let cellEls;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CellComponent,
        CellRowComponent
      ],
      providers: [
        {provide: GameService, useValue: gameServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    cellEls = fixture.debugElement.queryAll(By.css('.grid-cell'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should create one cell element for each returned from service', () => {
    expect(cellEls.length).toEqual(3);
  });
});
