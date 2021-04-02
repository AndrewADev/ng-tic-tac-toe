import { waitForAsync, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { CellComponent } from './cell.component';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import {Mark} from '../shared/mark';
import { PlayerTurnService } from '../player-turn.service';
import { Cell } from '../shared/cell';

describe('CellComponent', () => {
  @Component({
    selector: 'app-host-component',
    template: `  <app-cell [cell]="cell"></app-cell>`
  })
  class HostComponent {
    cell = new Cell();
  }

  let component: CellComponent;
  let fixture: ComponentFixture<CellComponent>;
  let cellEl: DebugElement;
  let endTurnSpy;
  let playerTurnService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CellComponent ],
      providers: [ PlayerTurnService ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CellComponent);
    component = fixture.componentInstance;
    component.cell = new Cell();

    playerTurnService = fixture.debugElement.injector.get(PlayerTurnService);
    endTurnSpy = spyOn(playerTurnService, 'endTurn').and.callThrough();
  }));

  beforeEach(() => {
    cellEl = fixture.debugElement.query(By.css('.grid-cell'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display mark when set', () => {
    component.setMark(Mark.X);
    fixture.detectChanges();
    expect(cellEl.nativeElement.textContent.trim()).toEqual('X');
  });

  it('should not change mark after initially set', () => {
    component.setMark(Mark.X);
    fixture.detectChanges();
    const firstVal = cellEl.nativeElement.textContent.trim();
    component.setMark(Mark.O);
    fixture.detectChanges();
    expect(cellEl.nativeElement.textContent.trim()).toEqual(firstVal);
  });

  it('should not allow seting mark after game over', () => {
    const firstVal = cellEl.nativeElement.textContent.trim();
    playerTurnService.endGame();
    fixture.detectChanges();
    component.setMark(Mark.O);
    fixture.detectChanges();
    expect(cellEl.nativeElement.textContent.trim()).toEqual(firstVal);
  });

  it('should not end turn if mark not updated', () => {
    cellEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    cellEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(endTurnSpy).toHaveBeenCalledTimes(1);
  });

  it('should show mark after user click', () => {
    cellEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(cellEl.nativeElement.textContent.trim()).toEqual('X');
  });
});
