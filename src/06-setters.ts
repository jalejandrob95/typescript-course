export class MyDate {
  //resume form to declare constructor
  constructor(
    public year: number = 1992,
    private _month: number = 7,
    private _day: number = 20 //under score define private variables
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
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
    if (type === 'month') this._month += amount;
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
  //setters not return
  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('mont out of range');
    }
  }
}

const myDate = new MyDate(1995, 3, 13);
console.log(myDate.printFormat());

myDate.add(3, 'days');
console.log(myDate.printFormat());

const myDate2 = new MyDate(2000);
console.log(myDate2.printFormat());
//setter
myDate2.month = 78;
//getter
console.log(myDate2.day);
console.log(myDate2.isLeapYear); //this is a method to injected any code
