import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-status-dashboard',
  templateUrl: './game-status-dashboard.component.html',
  styleUrls: ['./game-status-dashboard.component.css']
})
export class GameStatusDashboardComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }

  get status() {
    return !this.gameService.hasGameEnded ? 'In-progress' : 'Game over';
  }
}
