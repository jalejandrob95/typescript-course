const date = new Date();

date.getTime();
date.getHours();

export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(1995, 3, 13);
console.log(myDate);
