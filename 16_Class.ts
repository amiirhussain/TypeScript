// TypeScript adds types and visibility modifiers to JavaScript classes.

// members: types
class Car {
  name: string;
}
const car = new Car();
car.name = 'Civic';

// members: visibility
class Car1 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
