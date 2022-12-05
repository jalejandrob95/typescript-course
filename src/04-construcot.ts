export class MyDate {
  //resume form to declare constructor
  constructor(
    public year: number = 1992,
    public month: number = 7,
    public day: number = 20
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  //this method is private only used in the class add 0 to init date format
  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'month' | 'years') {
    if (type === 'days') this.day += amount;
    if (type === 'month') this.month += amount;
    if (type === 'years') this.year += amount;
  }
}

const myDate = new MyDate(1995, 3, 13);
console.log(myDate.printFormat());

myDate.add(3, 'days');
console.log(myDate.printFormat());

const myDate2 = new MyDate(1995);
console.log(myDate2.printFormat());

myDate.add(3, 'days');
console.log(myDate.printFormat());
