export abstract class Animal {
  constructor(protected name: string) {} // protected method allow inheritances and not change the value in the class

  move() {
    console.log('Moving along');
  }
  greeting() {
    return `Hello, I'm ${this.name}`;
  }
  protected doSomething() {
    console.log('sleep...');
  }
}

export class Cat extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }
  meow(times: number) {
    for (let index = 0; index < times; index++) {
      console.log(`meow ${this.name}`);
    }
    this.doSomething();
  }
}

const ichigo = new Cat('ichigo', 'Andrea');
ichigo.meow(1);
ichigo.owner;
