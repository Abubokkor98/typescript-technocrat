{
  //Learning function
  //Normal function
  //Arrow function

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(2, "2");

  //we can also set default value for a parameter
  function add2(num3: number, num4: number = 10): number {
    return num3 + num4;
  }
  add2(1);

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  //object --> function => method

  const poorUser = {
    name: "Abu Bokkor",
    balance: 0,
    addBalance(newBalance: number): string {
      return `My new balance is ${this.balance + newBalance}`;
    },
  };

  /**
   *
   */

  const array: number[] = [2, 4, 20];

  const newArray: number[] = array.map(
    (element: number): number => element * element
  );

  // ***interview question***
  // ***map retun new array***
}
