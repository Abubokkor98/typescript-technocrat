{
  /** */
  //generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //menually

  type Owner2 = keyof Vehicle;

  //   const person: Owner = "bike";
  const person: Owner2 = "bike";

  //
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "AB",
    age: 27,
    address: "DHK",
  };

  const car = {
    model: "toyoto",
    color: "black",
  };

  //   const retult1 = getPropertyValue(user, "id"); //will get error
  const retult1 = getPropertyValue(user, "name");
  const retult2 = getPropertyValue(car, "color");

  //   user.name
  //   user["name"];

  /** */
}
