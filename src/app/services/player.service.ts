import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "../models/Player";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  BASE_URL = "http://localhost:8080";
  BASE_AVATAR_URL = "https://x.boardgamearena.net/data/themereleases/200724-1351/../../data/avatar/0/"

  constructor(private _http: HttpClient) {
  }

  getProfile(playerName: string): Observable<Player> {
    return this._http.get<Player>(`${this.BASE_URL}/player/${playerName}`)
      .pipe(
        map(player => this.formatUrl(player)
        ));
  }

  formatUrl(player: Player): Player {
    let id = "" + player.id;
    let bucket1 = id.substring(0, 2);
    let bucket2 = id.substring(0, 5);
    player.avatar = this.BASE_AVATAR_URL + bucket1 + "/" + bucket2 + "/" + id + "_184.jpg?h=" + player.avatar;
    console.log(player.avatar);
    return player;
  }
}
