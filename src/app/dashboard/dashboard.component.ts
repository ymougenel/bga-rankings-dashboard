import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../core/services/player.service";
import {Player} from "../core/models/Player";
import {players} from "../core/models/mocks/playersMock";
import {games} from "../core/models/mocks/gamesMock";
import {Game} from "../core/models/Game";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService) {
  }

  player: Player;
  favoriteGames: Game[];

  ngOnInit(): void {
    // this.getMockedProfile();
    this.getProfile();
    this.favoriteGames = games;
  }

  getProfile(): void {
    const playername = this.route.snapshot.paramMap.get('playername');
    this.playerService.getProfile(playername)
      .subscribe(profile => {
        this.player = profile;
      })
  }

  getMockedProfile(): void {
    this.player = players[0]; //TODO id from path

  }
}
