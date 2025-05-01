{
  //spread operator
  //rest operator
  //destructuring

  //learn spread operator
  const bros1: string[] = ["alamin", "shahin", "shakil"];
  const bros2: string[] = ["sahabuddin", "oli", "sakil2"];

  bros1.push(bros2);
  bros1.push(...bros2);

  const mentros1 = {
    typescript: "Mezba",
    redux: "mir",
    dbms: "Mizan",
  };
  const mentros2 = {
    prisma: "Firoz",
    nextjs: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentros1,
    ...mentros2,
  };

  //learn rest operator

  // const greetFriends= (friend1:string, friend2:string, friend3:string)=>{
  //     console.log(`Hi ${friend1} ${friend2} ${friend3}`);
  // }
  // greetFriends('abul', "babul", "kabul", "habul")

  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    friends.forEach((friend) => console.log(`Hi my dear ${friend}`));
  };
  greetFriends("abul", "babul", "kabul", "habul");
}
