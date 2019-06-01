import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { CellRowComponent } from './cell-row/cell-row.component';
import { GameService } from './game.service';
import { CellGridComponent } from './cell-grid/cell-grid.component';
import { PlayerTurnService } from './player-turn.service';
import { GameStatusDashboardComponent } from './game-status-dashboard/game-status-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    CellRowComponent,
    CellGridComponent,
    GameStatusDashboardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [
    GameService,
    PlayerTurnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
