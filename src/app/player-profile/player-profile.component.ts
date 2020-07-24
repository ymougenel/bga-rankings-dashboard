import {Component, OnInit} from '@angular/core';
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

  player: Player;

  ngOnInit(): void {
    // this.getMockedProfile();
    this.getProfile();
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
