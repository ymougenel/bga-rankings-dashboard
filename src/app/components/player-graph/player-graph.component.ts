import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Player} from "../../core/models/Player";
import {RankingsService} from "../../core/services/rankings.service";
import {Ranking} from "../../core/models/Ranking";
import {GraphConfig} from "./graph.config";
import {Game} from "../../core/models/Game";
import {BaseChartDirective} from "ng2-charts";

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

  @ViewChild("baseChart")
  chart: BaseChartDirective;

  public lineChartData;
  public lineChartLabels;
  rankings: Ranking[];
  dataAvailable = false;
  graphConfig: GraphConfig = new GraphConfig();

  ngOnChanges(changes: SimpleChanges) {
    this.getRankings(this.player.id, changes.game.currentValue.id);

  }

  ngOnInit(): void {
  }

  getRankings(playerId: number, gameId: string): void {
    this.rankingsService.getRankings(playerId, gameId)
      .subscribe(rankings => {
        this.rankings = rankings;
        this.createGraph();
      })
  }

  createGraph() {
    this.lineChartData = [{data: [], label: "rank"}];
    this.lineChartLabels = [];
    this.rankings.forEach(r => {
      this.lineChartData[0].data.push(r.rank);
      this.lineChartLabels.push(new Date(r.date));
    });
    this.dataAvailable = true;
  }

}
