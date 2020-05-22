import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../services/player.service";
import {Player} from "../models/Player";

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
    this.getProfile();
  }

  getProfile(): void {
    this.playerService.getProfile("Simone92")
      .subscribe(profile => {
        this.player = profile
      })
  }

}
