import Race from './Race';

export default class Elf extends Race {
  maxLifePoints = 99;
  ;
  
  constructor(name:string, dexterity: number) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  static createdRacesInstances():number {
    return Elf.instances;
  }
}
