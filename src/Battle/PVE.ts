import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

const MIN_HIT_CHANCE = 6;
export default class PVE extends Battle {
  monsters: SimpleFighter[];

  constructor(char: Fighter, monsters: SimpleFighter[]) {
    super(char);
    this.monsters = monsters;
  }

  // returns fight status
  isFightOver(): boolean {
    // there is any monster alive?
    const anyMonsterAlive = this.monsters.some(
      (monster) => monster.lifePoints !== -1,
    );

    // is the player alive?
    const playerAlive = this.player.lifePoints !== -1;

    if (playerAlive && anyMonsterAlive) return false;

    return true;
  }

  playerHit(): void {
    let attackDone = false;
    // Player try to attack a random monster.
    // If it's dead, it shuffles again till he can attack
    while (attackDone === false) {
      const enemyPosition = getRandomInt(1, this.monsters.length) - 1;
      const monster = this.monsters[enemyPosition];
      
      if (monster.lifePoints !== -1) {
        this.player.attack(monster);
        attackDone = true;
      }      
    }
  }

  // For balance decisions, monsters only hit 6/10 times
  monsterHit(monster: SimpleFighter) {
    const hitChance = getRandomInt(1, 10);
    if (hitChance > MIN_HIT_CHANCE) {
      monster.attack(this.player);
    }
  }

  // turn mechanics. Player attack first
  // TODO turn into luck-based
  turn(): void {
    // player hit one monster
    this.playerHit();
    // each monster attack
    this.monsters.forEach((monster) => {
      if (monster.lifePoints !== -1) {
        this.monsterHit(monster);
      }
    });
  }

  // should return
  // 1 if player1 wins
  // -1 otherwise
  fight(): number {
    // fight happening
    while (!this.isFightOver()) {
      this.turn();
    }

    // if player is dead
    if (this.player.lifePoints === -1) {
      return -1;
    }

    // player wins
    return 1;
  }
}
