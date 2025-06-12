{
  /** */
  //promise

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  getTodo();

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";

      if (data) {
        resolve(data);
      } else {
        reject("Promise rejected");
      }
    });
  };

  //calling createPromise function
  const showData = async (): Promise<string> => {
    const data = await createPromise();
    //console.log(data);
    return data;
  };

  showData();

  /** */
}
