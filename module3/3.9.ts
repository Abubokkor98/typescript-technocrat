{
  /** */
  // Abstraction in OOP
  //abstraction 2vabe kora jay: 1. interface, 2. abstract

  //idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //real impementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am stopping the car engine`);
    }
    move(): void {
      console.log(`i am moving the car`);
    }
    //
    test() {
      console.log(`i am testing the car engine`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.move();
  toyotaCar.test();

  //abstract class
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    //
    test() {
      console.log(`i am testing the car engine`);
    }
  }

  //   const BMWCar = new Car2(); //we cant create instenceof abstract class

  class BMWCar extends Car2 {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`i am stopping the car engine`);
    }
    move(): void {
      console.log(`i am moving the car`);
    }
  }

  /** */
}
