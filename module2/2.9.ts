{
  /** */
  // conditional type

  type a1 = null;
  type b1 = undefined;

  type x = a1 extends null ? true : false; // X conditional type
  type Y = a1 extends true ? true : b1 extends undefined ? undefined : any;

  //
  type Borolok1 = {
    bike: string;
    car: string;
    ship: string;
  };

  // car ase kina/ bike ase kina/ ship ache kina/ tractor ache kina
  //   type CheckVehicle <T>= T extends "bike" | "car" | "ship"?true:false

  //keyof Borolok1 "bike" | "car" | "ship"
  type CheckVehicle<T> = T extends keyof Borolok1 ? true : false;

  type hasBike = CheckVehicle<"bike">; //true
  type hasTractor = CheckVehicle<"Tractor">; //false

  /** */
}
