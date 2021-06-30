class Hero {
  constructor({ name, power }) {
    this.name = name;
    this.power = power;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name} and my power is ${this.power}.`);
  }
}

// eslint-disable-next-line import/prefer-default-export
export default Hero;
