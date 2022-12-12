function getValue<T>(value: T) {
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
