{
  /*** */
  //generic type

  //   type genericArray = Array<string>
  // type genericArray <params> = Array<params>

  // Industry standard format is T instead of params
  type genericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [1, 2, 3];
  const rollNumbers: genericArray<number> = [1, 2, 3];

  //   const courses: string[] = ["A", "B"];
  const courses: genericArray<string> = ["A", "B"];

  //   const boolArray: boolean[] = [true, false, true];
  const boolArray: genericArray<boolean> = [true, false, true];

  //object
  //genericArray<object>  this is not recommended

  //this is best practice and recommended
  const user: genericArray<{ name: string; age: number }> = [
    {
      name: "AB",
      age: 100,
    },
    {
      name: "CD",
      age: 100,
    },
  ];

  // generic touple
  type GenericTouple<X, Y> = [X, Y];

  const jamaiWithBou: GenericTouple<string, string> = ["Mr X", "Mrs Y"];

  const userWithId: GenericTouple<number, { name: string; email: string }> = [
    12345,
    { name: "AB", email: "ab@gmail.com" },
  ];

  /*** */
}
