export interface Driver {
  database: String;
  password: string;
  port: number;

  //the class has a methods
  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

//const driver: Driver = {
//  database: '',
//  password: '',
//  port: 23,
//};

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  connect(): void {}
  disconnect(): void {}
  isConnected(name: string): boolean {
    return true;
  }
}
