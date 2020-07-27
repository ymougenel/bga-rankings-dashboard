import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../core/services/player.service";
import {Player} from "../core/models/Player";
import {RankingsService} from "../core/services/rankings.service";
import {Ranking} from "../core/models/Ranking";
import {GraphConfig} from "./graph.config";

@Component({
  selector: 'app-player-graph',
  templateUrl: './player-graph.component.html',
  styleUrls: ['./player-graph.component.scss']
})
export class PlayerGraphComponent implements OnInit {


  constructor(private rankingsServcie: RankingsService) {
  }

  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  rankings: Ranking[];
  dataAvailable = false;
  graphConfig: GraphConfig = new GraphConfig();

  ngOnInit(): void {
    this.getRankings('85045241', '1127');
  }

  getRankings(playerId, gameId): void {
    this.rankingsServcie.getRankings(playerId, gameId)
      .subscribe(rankings => {
        this.rankings = rankings;
        this.createGraph();
      })
  }

  createGraph() {
    this.rankings.forEach(r => {
      this.lineChartData.push({data: r.rank, label: r.playerId});
      this.lineChartLabels.push(new Date(r.date));
    });
    this.dataAvailable = true;
  }

}
