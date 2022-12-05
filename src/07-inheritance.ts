export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along');
  }
  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Cat extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  meow(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('meow');
    }
  }
}

const charlotte = new Animal('charlotte');

console.log(charlotte.greeting());

const ichigo = new Cat('ichigo', 'Andrea');
ichigo.meow(5);
console.log(ichigo.greeting());
console.log(ichigo.owner);
