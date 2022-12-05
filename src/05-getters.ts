export class MyDate {
  //resume form to declare constructor
  constructor(
    public year: number = 1992,
    public month: number = 7,
    private _day: number = 20 //under score define private variables
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
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
    if (type === 'days') this._day += amount;
    if (type === 'month') this.month += amount;
    if (type === 'years') this.year += amount;
  }

  //geter
  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
}

const myDate = new MyDate(1995, 3, 13);
console.log(myDate.printFormat());

myDate.add(3, 'days');
console.log(myDate.printFormat());

const myDate2 = new MyDate(2000);
console.log(myDate2.printFormat());

myDate.add(3, 'days');
console.log(myDate.printFormat());

//getter
console.log(myDate.day);
console.log(myDate.isLeapYear); //this is a method to injected any code
