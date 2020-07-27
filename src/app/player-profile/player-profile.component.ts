import {Component, Input, OnInit} from '@angular/core';
import {PlayerService} from "../services/player.service";
import {Player} from "../models/Player";
import {players} from "../models/mocks/playersMock";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService) {
  }

  @Input() player: Player;

  ngOnInit(): void {
  }

}
