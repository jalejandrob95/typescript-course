export class MyService {
  private constructor(private name: string) {} //Only in the class have access

  static instance: MyService | null = null;
  getName() {
    return this.name;
  }
  static create(name: string) {
    //create flag if exist this service and only call 1 time
    if (MyService.instance === null) {
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('service 1');

console.log(myService1);
