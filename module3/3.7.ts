{
  /** */
  //Statics in OOP
  //   class Counter {
  //     count: number = 0;
  //     increment() {
  //       return (this.count = this.count + 1);
  //     }
  //     decrement() {
  //       return (this.count = this.count - 1);
  //     }
  //   }

  class Counter {
    static count: number = 0;
    increment() {
      // we can also make this increment function static
      return (Counter.count = Counter.count + 1);
    }
    decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //   const instance1 = new Counter(); // different memory
  //   console.log(instance1.increment());
  //   console.log(instance1.increment());
  //   console.log(instance1.increment());

  //   const instance2 = new Counter(); // different memory
  //   console.log(instance2.increment());
  //   console.log(instance2.increment());

  const instance1 = new Counter(); // same memory
  console.log(instance1.increment());
  console.log(instance1.increment());
  console.log(instance1.increment());

  const instance2 = new Counter(); // same memory
  console.log(instance2.increment());
  console.log(instance2.increment());

  const instance3 = new Counter();
  console.log(instance3.decrement());

  /** */
}
