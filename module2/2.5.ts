{
  /*** */

  //function with generics
  const createArray = (params: string): string[] => {
    return [params];
  };

  const res1 = createArray("Bangladesh");

  //
  const createArrayWithGeneric = <T>(params: T): T[] => {
    return [params];
  };
  // const resGeneric = createArrayWithGeneric<boolean>(true);
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type user = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<user>({
    id: 111,
    name: "AB",
  });

  //
  const createArrayWithTouple = <T, X>(params1: T, params2: X): [T, X] => {
    return [params1, params2];
  };
  const res2 = createArrayWithTouple<string, number>("Bangladesh", 121);

  const res3 = createArrayWithTouple<
    string,
    { freedom: boolean; distric: number }
  >("Bangladesh", { freedom: true, distric: 64 });

  //
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "AB",
    email: "ab@gmail.com",
    devType: "Next Level Web Developer",
  });

  const student2 = addCourseToStudent({
    name: "CD",
    email: "cd@gmail.com",
    hasMacBook: true,
  });
  /** */
}
