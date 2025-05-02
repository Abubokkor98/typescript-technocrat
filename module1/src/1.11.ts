{
  //ternary operator || optionl chaining || nullish coalescing operator

  //ternary operator
  const age: number = 18;

  //   if (age >= 18) {
  //     console.log("adult");
  //   } else {
  //     console.log("not adult");
  //   }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  //nullish coalescing operator
  // onlt for null / undefinded ---> decision making

  //   const isAuthenticated= null;
  const isAuthenticated = undefined;

  const result1 = isAuthenticated ?? "Guest";
  console.log({ result1 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user : User={
    name: "AB",
    address:{
        city: "DHAKA",
        road:"32",
        presentAddress:"uganda"
    }
  }
  const myPermanentAddress = user?.address?.permanentAddress ?? "Non permanent address"
  console.log({myPermanentAddress});

  //
}
