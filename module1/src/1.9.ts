{
  //Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "ab",
    age: 27,
    gender: "male",
    contactNo: "2452525",
    address: "dk",
  };

  const student2: Student = {
    name: "ab",
    age: 27,
    gender: "male",
    address: "dk",
  };
  const student3: Student = {
    name: "ab",
    age: 27,
    gender: "male",
    contactNo: "2452525",
    address: "dk",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "AB";
  const isAdmin: IsAdmin = false;

  //function
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
