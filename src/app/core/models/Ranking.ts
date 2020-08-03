import {Player} from "./Player";

export class Ranking {
  elo: number;
  rank: number;
  player: Player;
  gameId: number;
  date: string;
  rankVariation: number;
}
