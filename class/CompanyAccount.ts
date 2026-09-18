import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan(amount: number): void {
    if (amount <= 0) {
      throw new Error('O valor do empréstimo deve ser maior que zero')
    }

    if (this.validateStatus()) {
      this.credit(amount)
      console.log(`Empréstimo de ${amount} aprovado.`)
      this.getBalance()
    }
  }
}
