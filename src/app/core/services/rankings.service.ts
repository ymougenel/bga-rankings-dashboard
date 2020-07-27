import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ranking} from "../models/Ranking";
import {HttpClientConfig} from "./http-client-config";

@Injectable({
  providedIn: 'root'
})
export class RankingsService {

  // SITE_URL = 'https://boardgamearena.com/playerstat/playerstat/getrankevol.html?player=86499799&game=1127'

  constructor(private _http: HttpClient, private readonly _config: HttpClientConfig) {
  }

  getRankings(playerId: number, gameId: number): Observable<Ranking[]> {
    return this._http.get<Ranking[]>(`${this._config.baseUrl}/ranking/${gameId}/${playerId}`);
  }

  //Requires premium
  // getELOs(playerId: number, gameId: number): Observable<string> {
  //   return this._http.get<string>(`${this.SITE_URL}?game${gameId}?player=${playerId}`);
  // }
}
