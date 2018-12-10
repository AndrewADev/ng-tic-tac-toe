import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { CellRowComponent } from './cell-row/cell-row.component';
import { GameService } from './game.service';
import { GameServiceStub } from '../testing/game-service.stub';
import { CellGridComponent } from './cell-grid/cell-grid.component';
import { PlayerTurnService } from './player-turn.service';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    CellRowComponent,
    CellGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: GameService, useValue: new GameServiceStub()},
    {provide: PlayerTurnService, useValue: new PlayerTurnService()}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
