export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;
  static instances = 0;
  
  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }
  
  abstract set maxLifePoints(lifePoints: number);
  abstract get maxLifePoints(): number;

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }
}
