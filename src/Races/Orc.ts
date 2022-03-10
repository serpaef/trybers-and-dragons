import Race from './Race';

export default class Orc extends Race {
  maxLifePoints = 74;
  ;
  
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  static createdRacesInstances():number {
    return Orc.instances;
  }
}
