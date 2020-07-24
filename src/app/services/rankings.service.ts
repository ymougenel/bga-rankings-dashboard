import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../models/Player";
import {Ranking} from "../models/Ranking";

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  BASE_URL = 'http://localhost:8080';
  SITE_URL = 'https://boardgamearena.com/playerstat/playerstat/getrankevol.html?player=86499799&game=1127'

  constructor(private _http: HttpClient) {
  }

  getRankings(playerId: number, gameId: number): Observable<Ranking[]> {
    return this._http.get<Ranking[]>(`${this.BASE_URL}/ranking/${gameId}/${playerId}`);
  }

  //Requires premium
  getELOs(playerId: number, gameId: number): Observable<string> {
    return this._http.get<string>(`${this.SITE_URL}?game${gameId}?player=${playerId}`);
  }
}
