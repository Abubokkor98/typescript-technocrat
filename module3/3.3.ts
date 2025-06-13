{
  /** */
  //type guards
  // typeof --> type guard (we know typeof only works in the run time)

  type alphanewmeric = string | number;

  const add = (num1: alphanewmeric, num2: alphanewmeric): alphanewmeric => {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 + num2;
    } else {
      return num1.toString() + num2.toString();
    }
  };

  const result1 = add(2, 2);
  console.log(result1);
  const result2 = add("2", 2);
  console.log(result2);

  //in guard
  type NormalUser = {
    name: string;
  };

  type AdminUSer = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUSer) => {
    //in guard
    if ("role" in user) {
      console.log(`the user role is ${user.role}`);
    } else {
      console.log(`the user don't have any role`);
    }
  };
  const normalUser: NormalUser = { name: "AB" };
  const adminUser: AdminUSer = { name: "AB", role: "admin" };
  getUser(normalUser);
  getUser(adminUser);

  /** */
}
