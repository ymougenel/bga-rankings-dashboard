import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Player} from "../core/models/Player";
import {Game} from "../core/models/Game";
import {RankingsService} from "../core/services/rankings.service";
import {Ranking} from "../core/models/Ranking";
import {groupBy, mergeMap, toArray} from "rxjs/operators";
import {map} from "rxjs/operators";

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
    this.getRankings(this.game.id)
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getRankings(changes.game.currentValue.id);

  }

  getRankings(gameId: string) {
    let endDate = new Date();
    let startDate = new Date(new Date().setDate(new Date().getDate() - 1)); // Yesterday
    // let end = new Date(new Date().setDate(new Date().getDate() - 1)); // Yesterday
    console.log("-------------------------------");
    console.log(startDate);
    console.log(endDate);
    // TODO: mv harcoded count value to properties
    this.rankingService.getRankingsBetween(this.game.id, this.player.id, 10, startDate, endDate).subscribe(rankings =>
      // TODO handle slicing in back (for variation)
      this.rankings = rankings.slice(0, rankings.length / 2)
    )

  }

}
