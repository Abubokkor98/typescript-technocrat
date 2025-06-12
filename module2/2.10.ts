{
  /** */
  // mapped types
  const arrayOfNumber: number[] = [1, 2, 3];
  //   const arrayOfString: string[] = ["1", "2", "3"];
  const arrayOfString: string[] = arrayOfNumber.map((number) =>
    number.toString()
  );
  console.log(arrayOfString); // ["1", "2", "3"]

  //
  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // look up type

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  type AreaString = {
    // [key in "height" | "width"] : string
    [key in keyof AreaNumber]: string;
  };

  // T => {height:string, width:number}
  // key = T["height"] // string  //look up type
  // key = T["width"] // number  //look up type
  type AreaString1<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString1<{ height: string; width: number }> = {
    height: "100",
    width: 100,
  };

  /** */
}
