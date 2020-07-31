import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "../core/services/player/player.service";
import {Player} from "../core/models/Player";
import {players} from "../core/models/mocks/playersMock";
import {games} from "../core/models/mocks/gamesMock";
import {Game} from "../core/models/Game";
import {Page} from "../core/models/page";
import {GameService} from "../core/services/game/game.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private gameService: GameService) {
  }

  player: Player;
  favoriteGames: Game[];
  selectedGame: Game;

  nameQuery = "";
  playersNameQueryResult: Page<Player>;

  ngOnInit(): void {
    // this.getMockedProfile();
    this.route.params.subscribe(params => {
      let playerName = params['playername'];
      this.playerService.getProfile(playerName).subscribe(profile => {
        this.player = profile;
      });
      this.gameService.allGames().subscribe(games => {
        this.favoriteGames = games;
        this.selectedGame = this.favoriteGames[0];
      });
    });
  }

  getMockedProfile(): void {
    this.player = players[0];

  }

  onSelect(game: Game): void {
    this.selectedGame = game;
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
