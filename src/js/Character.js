export default class Character {
  constructor(name) {
    this.name = name;
    this.attackValue = 50;
    this.stonedStatus = false;
  }

  get attack() {
    return (distance) => {
      let attack = this.attackValue - 10 * (distance - 1);
      if (this.stoned) {
        attack -= Math.log2(distance) * 5;
      }
      attack = Math.round(attack);
      return attack;
    };
  }

  set attack(value) {
    this.attackValue = value;
  }

  get stoned() {
    return this.stonedStatus;
  }

  set stoned(state) {
    this.stonedStatus = state;
  }
}
