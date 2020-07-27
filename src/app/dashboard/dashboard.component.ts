import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../core/services/player.service";
import {Player} from "../core/models/Player";
import {players} from "../core/models/mocks/playersMock";
import {games} from "../core/models/mocks/gamesMock";
import {Game} from "../core/models/Game";
import {Page} from "../core/models/page";

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
  nameQuery = "";
  playersNameQueryResult: Page<Player>;

  ngOnInit(): void {
    // this.getMockedProfile();
    this.route.params.subscribe(params => {
      let playerName = params['playername'];
      this.playerService.getProfile(playerName).subscribe(profile => {
        this.player = profile;
      });
    });
    this.favoriteGames = games;
  }

  getMockedProfile(): void {
    this.player = players[0];

  }

  updateNameQuery(newQuery): void {
    console.log("Update name query called with" + this.nameQuery);
    if (this.nameQuery) {
      this.playerService.fetchMatchingProfiles(this.nameQuery)
        .subscribe(result => {
          this.playersNameQueryResult = result;
        });
    }

  }
}
