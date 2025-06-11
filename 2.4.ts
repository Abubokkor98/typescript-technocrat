{
  /** */

  //interface - generic

  //   interface Developer<T, X> {
  //     name: string;
  //     computer: {
  //       brand: string;
  //       model: string;
  //       releaseYear: number;
  //     };
  //     smartWatch: T;
  //     bike?: X;
  //   }

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface GoribWatch {
    brand: string;
    model: string;
    display: string;
  }

  const goribDeveloper: Developer<GoribWatch> = {
    name: "AB",
    computer: {
      brand: "Lenovo",
      model: "wjwofj",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Asus",
      model: "k23",
      display: "OLED",
    },
  };

  interface BorolWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface BikeforBorolok {
    model: string;
    price: number;
  }

  const borolokDeveloper: Developer<BorolWatch, BikeforBorolok> = {
    name: "AB",
    computer: {
      brand: "Apple",
      model: "macMini4",
      releaseYear: 2000,
    },
    smartWatch: {
      brand: "Apple",
      model: "something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "YAMAHA",
      price: 200000,
    },
  };

  /** */
}
