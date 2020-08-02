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
    this.rankingService.getRankingsBetween(this.game.id, startDate, endDate).subscribe(rankinks => {
        this.rankings = this._slicePlayerRankings(this._sliceRankingsOccurences(rankinks), this.player.id, 10);
      }
    );
  }

  private _sliceRankingsOccurences(rankings: Ranking[]): Ranking[] {
    if (rankings.length < 1) {
      return rankings;
    }
    const total = rankings.length;
    const player_rankings_ng = rankings.filter(r => r.playerId == rankings[0].playerId).length;
    console.log("*** slicing (total:" + total + ", nb" + player_rankings_ng + "\t selecting:" + total / player_rankings_ng);
    return rankings.slice(0, total / player_rankings_ng);
  }

  private _slicePlayerRankings(rankings: Ranking[], playerId: string, count: number): Ranking[] {
    if (rankings.length < 1) {
      return rankings;
    }
    const total = rankings.length;
    const playerRank = rankings.filter(r => r.playerId == playerId)[0].rank;

    return rankings.filter(ranking => Math.abs(ranking.rank - playerRank) <= count / 2);
  }

  // groupBy(objectArray) {
  //   return objectArray.reduce((acc, obj) => {
  //     const key = obj["playerId"];
  //     if (!acc[key]) {
  //       acc[key] = [];
  //     }
  //     // Add object to list for given key's value
  //     acc[key].push(obj);
  //     return acc;
  //   }, {});
  // }

}
