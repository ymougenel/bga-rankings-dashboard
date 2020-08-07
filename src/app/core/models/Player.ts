import { defaultsDeep } from 'lodash';

export class Player {
  private static readonly _default: () => Partial<Player> = () => ({
    name: '',
    id: 0,
    avatar: '',
    country: '',
    countryFlagX: 0,
    countryFlagY: 0
  });


  name: string;
  id: number;
  avatar: string;
  // langues: string[];
  // gender: string;
  country: string;
  countryFlagX: number;
  countryFlagY: number;

  constructor(player?: Partial<Player>) {
    defaultsDeep(this, player, Player._default());
  }

}
