class Message {
  #message = 'Howdy';

  greet() {
    console.log(this.#message);
  }
}

const greeting = new Message();

greeting.greet();
