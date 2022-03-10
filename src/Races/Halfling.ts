import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints = 60;
  ;
  
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  static createdRacesInstances():number {
    return Halfling.instances;
  }
}
