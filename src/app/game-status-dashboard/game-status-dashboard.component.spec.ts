import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStatusDashboardComponent } from './game-status-dashboard.component';
import { GameService } from '../game.service';
import { GameServiceStub } from 'src/testing/game-service.stub';
import { PlayerTurnService } from '../player-turn.service';

describe('GameStatusDashboardComponent', () => {
  let component: GameStatusDashboardComponent;
  let fixture: ComponentFixture<GameStatusDashboardComponent>;
  const gameServiceMock = new GameServiceStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStatusDashboardComponent ],
      providers: [{provide: GameService, useValue: gameServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStatusDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have in-progress status by default', () => {
    expect(component.status).toContain('progress');
  });

  it('should show "game over" when game ends', () => {
    gameServiceMock.toggleGameActive();
    fixture.detectChanges();
    expect(component.status.toLowerCase()).toContain('game over');
  });
});
