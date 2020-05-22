import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "../models/Player";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  BASE_URL= "http://localhost:8080";

  constructor(private _http: HttpClient) {
  }

  getProfile(playerName: string): Observable<Player> {
    return this._http.get<Player>(`${this.BASE_URL}/player/${playerName}`);
  }
}
