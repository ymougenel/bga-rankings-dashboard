import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../core/models/Player";
import {RankingsService} from "../core/services/rankings.service";
import {Ranking} from "../core/models/Ranking";
import {GraphConfig} from "./graph.config";
import {Game} from "../core/models/Game";

@Component({
  selector: 'app-player-graph',
  templateUrl: './player-graph.component.html',
  styleUrls: ['./player-graph.component.scss']
})
export class PlayerGraphComponent implements OnInit {


  constructor(private rankingsService: RankingsService) {
  }

  @Input() player: Player;
  @Input() game: Game;

  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  rankings: Ranking[];
  dataAvailable = false;
  graphConfig: GraphConfig = new GraphConfig();

  ngOnInit(): void {
    console.log(this.player);
    console.log(this.game);
    this.getRankings();
  }

  getRankings(): void {
    this.rankingsService.getRankings(this.player.id, this.game.id)
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
