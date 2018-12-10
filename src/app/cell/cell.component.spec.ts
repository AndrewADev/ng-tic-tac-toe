import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellComponent } from './cell.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import {Mark} from '../mark';

describe('CellComponent', () => {
  let component: CellComponent;
  let fixture: ComponentFixture<CellComponent>;
  let cellEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellComponent);
    component = fixture.componentInstance;
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

  it('should show mark after user click', () => {
    cellEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(cellEl.nativeElement.textContent.trim()).toEqual('X');
  });
});
