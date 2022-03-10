export default abstract class Race {
  readonly name: string;
  readonly dexterity: number;
  
  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }
  
  abstract get maxLifePoints(): number;

  static createdRacesInstances = ():number => {
    throw new Error('Not implemented');
  };
}
