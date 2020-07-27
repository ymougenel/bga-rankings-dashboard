import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "../models/Player";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {HttpClientConfig} from "./http-client-config";
import {PageMapper} from "./page/page.mapper";
import {PlayerMapper} from "./player/player.mapper";
import {Page} from "../models/page";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _playerMapper = new PlayerMapper();
  private _playerPageMapper = new PageMapper(new PlayerMapper());

  const
  optionRequest = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private _http: HttpClient, private readonly _config: HttpClientConfig) {
  }

  getProfile(playerName: string): Observable<Player> {
    return this._http.get<Player>(`${this._config.baseUrl}/player/${playerName}`)
      .pipe(
        map((playerJson: any) => this._playerMapper.fromJson(playerJson)));
  }

  fetchMatchingProfiles(queryName): Observable<Page<Player>> {
    const url = `${this._config.baseUrl}/player/search/${queryName}`;
    return this._http
      .get(url)
      .pipe(map((page: any) => this._playerPageMapper.fromJson(page)));
  }


  // QUERY_URL = "https://boardgamearena.com/player/player/findPlayer.html";
  //
  // searchMatchingNames(name: string): Observable<String> {
  //   return this._http.get<string>(`${this.QUERY_URL}?q=` + name + "&start=0&count=Infinity", this.optionRequest)
  // }
}
