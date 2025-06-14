{
  /** */
  //Polymorphism
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7hours per day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6hours per day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const student1 = new Student();
  const developer1 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(student1);
  getSleepingHours(developer1);

  //
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // sutro: pi* r*r
  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  // height * width
  class Reactangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Reactangle(10, 20);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
  /** */
}
