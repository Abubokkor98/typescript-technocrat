{
  /** */
  //Getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number; //this is a good practice (using _ with provate property)
    //protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    //setter
    set deposite(amount: number) {
      //setter  kaj korbe function er moto, but use korte parbo propertyr moto
      this._balance = this._balance + amount;
    }

    // getBalance() {
    //   return this._balance;
    // }

    //getter
    get balance() {
      // getter kaj korbe function er moto, but use korte parbo propertyr moto
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "gorib acc", 500);
  goribManusherAccount.deposite = 500;
  const goriberBalance = goribManusherAccount.balance;
  console.log(goriberBalance);

  /** */
}
