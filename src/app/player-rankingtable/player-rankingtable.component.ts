import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../core/models/Player";
import {Game} from "../core/models/Game";
import {RankingsService} from "../core/services/rankings.service";
import {Ranking} from "../core/models/Ranking";

@Component({
  selector: 'app-player-rankingtable',
  templateUrl: './player-rankingtable.component.html',
  styleUrls: ['./player-rankingtable.component.scss']
})
export class PlayerRankingtableComponent implements OnInit {

  constructor(private rankingService: RankingsService) {
  }

  rankings: Ranking[];
  @Input() player: Player;
  @Input() game: Game;

  ngOnInit(): void {
    this.getRankings()
  }

  getRankings() {
    let endDate = new Date();
    let startDate = new Date(new Date().setDate(new Date().getDate() - 1)); // Yesterday
    // let end = new Date(new Date().setDate(new Date().getDate() - 1)); // Yesterday
    console.log("-------------------------------");
    console.log(startDate);
    console.log(endDate);
    this.rankingService.getRankingsBetween(this.player.id, startDate, endDate).subscribe(rankinks =>
      this.rankings = rankinks
    );
  }
}
