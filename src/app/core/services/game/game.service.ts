import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HttpClientConfig} from "../http-client-config";
import {Game} from "../../models/Game";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private _http: HttpClient, private readonly _config: HttpClientConfig) {
  }

  allGames(): Observable<Game[]> {
    return this._http.get<Game[]>(`${this._config.baseUrl}/game/all`)
  }
}
