import {Player} from "../../models/Player";
import {Mapper} from "../mapper";

export class PlayerMapper implements Mapper<Player>{
  BASE_AVATAR_URL = "https://x.boardgamearena.net/data/themereleases/200724-1351/../../data/avatar/0/"

  fromJson(json: any) : Player {
    let player: Player = new Player(json)
    player.avatar = this.formatAvatarUrl(player);
    return player;
  }

  formatAvatarUrl(player: Player): string {
    let id = "" + player.id;
    let bucket1 = id.substring(0, 2);
    let bucket2 = id.substring(0, 5);
    let avatarUrl = this.BASE_AVATAR_URL + bucket1 + "/" + bucket2 + "/" + id + "_184.jpg?h=" + player.avatar;
    // console.log(avatarUrl);
    return avatarUrl;
  }

  toJson(model: Player): any { }
}
