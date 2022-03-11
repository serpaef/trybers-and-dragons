import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

// Critical value to special
const CRITICAL = 19;

export default class PVP extends Battle {
  constructor(protected player1: Fighter, protected player2: Fighter) {
    super(player1);
  }

  // attack mechanics
  // character can 'crit-hit' with a special movement in 10% chances
  hit = (attacker: Fighter, target: Fighter): void => {
    if (attacker.lifePoints === -1) return;
    const special = getRandomInt(1, 20);
    if (special >= CRITICAL) {
      console.log('SPECIAL MOVE!!!');
      attacker.special(target);
    } else {
      attacker.attack(target);
    }
  };

  // turn mechanics. luck-based.
  // TODO turn into dexterity based.
  turn(): void {
    const firstAttacker = getRandomInt(1, 2);
    if (firstAttacker === 1) {
      this.hit(this.player1, this.player2);
      this.hit(this.player2, this.player1);
    } else {
      this.hit(this.player2, this.player1);
      this.hit(this.player1, this.player2);
    }
  }

  // should return
  // 1 if player1 wins
  // -1 if player2 wins
  // 0 if is a draw

  fight(): number {
    while (this.player1.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.turn();
    }

    switch (true) {
      case this.player1.lifePoints > this.player2.lifePoints:
        return 1;
      case this.player2.lifePoints > this.player1.lifePoints:
        return -1;
      default:
        return 0;
    }
  }
}
