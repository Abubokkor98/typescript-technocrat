{
  //union types

  //   type FrontendDeveloper = "Fakibaz Developer" | "Junior Developer";

  //   type FullStackDeveloper = "Fakibaz Developer" | "Expert Developer";

  //   type Developer = FrontendDeveloper | FullStackDeveloper;

  //   const newDeveloper: Developer = "Fakibaz Developer";

  type User = {
    name: string;
    email?: string;
    gender: "Male" | "Female";
    bloodGroup: "O+" | "A+" | "A-";
  };

  const user1: User = {
    name: "AB",
    gender: "Male",
    bloodGroup: "O+",
  };

  //Intersection types

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const newFullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "JS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
