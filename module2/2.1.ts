{
  //Type assertion
  let anything: any;

  anything = "I am Abu Bokkor Siddik";
  anything = true;
  anything = 222;

  //   (anything as string).
  //   (anything as boolean).
  //   (anything as number).

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `the converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value;
    }
  };

  const result1 = kgToGm(10) as number;
  const result2 = kgToGm("100") as string;

  //
  type customError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as customError).message);
  }
  //
}
