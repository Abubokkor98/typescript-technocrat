{
  /** */
  //constrains

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 111,
    name: "AB",
    email: "ab@gmail.com",
    devType: "Next Level Web Developer",
  });

  const student2 = addCourseToStudent({
    id: 222,
    name: "CD",
    email: "cd@gmail.com",
    hasMacBook: true,
  });

  const student3 = addCourseToStudent({
    id: 333,
    name: "EF",
    email: "ef@gmail.com",
    emni: "emni",
  });

  /** */
}
