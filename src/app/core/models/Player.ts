import { defaultsDeep } from 'lodash';

export class Player {
  private static readonly _default: () => Partial<Player> = () => ({
    name: '',
    id: '0',
    country: '',
    avatar: '',
  });


  name: string;
  id: string;
  avatar: string;
  // langues: string[];
  // gender: string;
  country: string;
  // countryFlag: string="";

  constructor(player?: Partial<Player>) {
    defaultsDeep(this, player, Player._default());
  }

}
