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

  getRankings(playerId: number, gameId: string): Observable<Ranking[]> {
    return this._http.get<Ranking[]>(`${this._config.baseUrl}/ranking/${gameId}/${playerId}`);
  }

  getRankingsBetween(gameId: string, startDate: Date, endDate: Date): Observable<Ranking[]> {
    let startTimeStamp = this.toTimestamp(startDate);
    let endTimeStamp = this.toTimestamp(endDate);
    return this._http.get<Ranking[]>(`${this._config.baseUrl}/ranking/${gameId}/${startTimeStamp}/${endTimeStamp}`)
  }

  toTimestamp(date: Date): number {
    return Math.round(date.getTime() / 1000);
  }

  private _sliceRankings(rankings : Ranking[]): Ranking[] {
    const total = rankings.length;
    const player_rankings_ng = rankings.filter( r => r.playerId = rankings[0].playerId).length;
    console.log("*** slicing"+ rankings + "\t selecting:" + total/player_rankings_ng);
    return rankings.slice(0, total/player_rankings_ng);
  }
  // Feature stop: Conflict with bga premium elo chart
  // getELOs(playerId: number, gameId: number): Observable<string> {
  //   return this._http.get<string>(`${this.SITE_URL}?game${gameId}?player=${playerId}`);
  // }
}
