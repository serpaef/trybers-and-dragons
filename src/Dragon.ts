import Monster from './Monster';

export default class Dragon extends Monster {
  private _lifepoints: number;
  constructor() {
    super();
    this._lifepoints = 999;
  }

  get lifePoints(): number {
    return this._lifepoints;
  }
}
