import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../core/models/Player";

@Component({
  selector: 'app-player-country',
  templateUrl: './player-country.component.html',
  styleUrls: ['./player-country.component.scss']
})
export class PlayerCountryComponent implements OnInit {

  constructor() { }

  @Input() player: Player;

  ngOnInit(): void {
  }

}
