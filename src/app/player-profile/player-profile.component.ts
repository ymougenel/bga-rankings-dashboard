import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../services/player.service";
import {Player} from "../models/Player";
import {players} from "../models/mocks/playersMock";

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent implements OnInit {

  constructor(private playerService: PlayerService) {
  }

  player: Player;

  ngOnInit(): void {
    this.getMockedProfile();
  }

  getProfile(): void {
    this.playerService.getProfile("Simone92")
      .subscribe(profile => {
        this.player = profile
      })
  }

  getMockedProfile(): void {
    this.player = players[0]; //TODO id from path
    //TODO name from path
  }
}
