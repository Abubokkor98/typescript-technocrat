{
  /** */
  type user1 = {
    name: string;
    age: number;
  };

  type userWithRole1 = user1 & { role: string };

  //interface
  interface user2 {
    name: string;
    age: number;
  }

  interface userWithRole2 extends user2 {
    role: string;
  }

  const user1: userWithRole1 = {
    name: "AB",
    age: 27,
    role: "Developer",
  };
  const user2: userWithRole2 = {
    name: "AB",
    age: 27,
    role: "Developer",
  };

  //   we know that in JS everything is object. object -> object, array-> object, function -> object.

  //array
  type Roll1 = number[];

  const rollNumber1: Roll1 = [1, 2, 3, 4, 5];

  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber2: Roll2 = [1, 2, 3, 4, 5];

  //function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => {
    return num1 + num2;
  };

  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add2: Add2 = (num1, num2) => {
    return num1 + num2;
  };
  /*** */
}
