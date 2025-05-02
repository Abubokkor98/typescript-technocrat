{
  //destructuring

  const user = {
    id: 123,
    name: {
      firstName: "Abu",
      middleName: "Bokkor",
      lastName: "Siddik",
    },
    contactNo: "017792838",
    address: "uganda",
  };

  const {
    contactNo,
    name: { middleName },
  } = user;

  //array destructuring

  const myFriends = ["abul", "babul", "kabul", "habul", "chabul"];
  const [, , bestFriend, ...rest] = myFriends;
}
