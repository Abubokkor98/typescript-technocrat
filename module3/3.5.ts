{
  /** */
  //access modifires
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

    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    getBalance() {
      return this._balance;
    }
  }

  //protected
  //BankAccount er _balance private kora tai amra child er access pacchina, jodi amader child e access dorkar hoy but onno kothao access atkate hoy tahole amra private er bodole "protected" use korbo ---> 
  class StudentAccount extends BankAccount{
    test(){
        this.
    }
  }

  const goribManusherAccount = new BankAccount(111, "gorib acc", 20);
  //   goribManusherAccount.balance = 45;
  goribManusherAccount.addDeposit(45);
  const goriberBalance = goribManusherAccount.getBalance();
  console.log(goriberBalance);

  /** */
}
