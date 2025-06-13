{
  /** */
  // utility types

  //pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type nameAge = Pick<Person, "name" | "age">;

  //Omit // bad deya/fele deya
  type ContactInfo = Omit<Person, "name" | "age">;

  //Required
  type PersonRequire = Required<Person>;

  //Partial
  type PersonPartial = Partial<Person>;

  //ReadOnly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "AB",
    age: 27,
    contactNo: "0122",
  };
  person1.name = "YOYO";

  //Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  //object er key always string (array er number), tai amra first param string use korsi, second string bcz MyObj er key er value gula sob string
  type MyObj = Record<string, string>;

  const obj: MyObj = {
    a: "a",
    b: "b",
    c: "c",
    d: 2,
  };

  //example of empty string, ' EmptyObj: {} = ' eivabe na likhe ektu specify er jonno Record use kora...
  const EmptyObj: Record<string, unknown> = {};

  /** */
}
