class MyMath {
  static readonly PI = 3.14; //only get value and only read value

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

console.log(MyMath.PI);
console.log('max', MyMath.max(-1222, -2212, -55, -812, -3741));
