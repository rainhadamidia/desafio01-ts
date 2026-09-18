import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit(amount: number): void {
    console.log('Bônus de depósito aplicado: +10')
    super.deposit(amount + 10)
  }
}
