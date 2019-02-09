import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellRowComponent } from './cell-row.component';
import { CellComponent } from '../cell/cell.component';

import { GameServiceStub } from '../../testing/game-service.stub';
import { GameService } from '../game.service';
import { By } from '@angular/platform-browser';
import { Cell } from '../shared/cell';
import { Mark } from '../shared/mark';
import { Component, Host } from '@angular/core';

describe('CellRowComponent', () => {
  @Component({
    selector: 'app-host-component',
    template: `  <app-cell-row [cells]="cells"></app-cell-row>`
  })
  class HostComponent {
    cells = [new Cell(), new Cell(), new Cell()];
  }

  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  const gameServiceStub = new GameServiceStub();
  let cellEls;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CellComponent,
        CellRowComponent,
        HostComponent
      ],
      providers: [
        {provide: GameService, useValue: gameServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    cellEls = fixture.debugElement.queryAll(By.css('.grid-cell'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should create one cell element for each passed from parent', () => {
    expect(cellEls.length).toEqual(3);
  });

});
