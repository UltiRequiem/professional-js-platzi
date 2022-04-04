class Hero {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor({ name, power }) {
    this.name = name;
    this.power = power;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  sayHi() {
    console.log(`Hi, I'm ${this.name} and my power is ${this.power}.`);
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Hero;
