export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName(): string {
    return this.name
  }

  getBalance(): number {
    console.log(`Saldo de ${this.name}: ${this.balance}`)
    return this.balance
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('O valor do depósito deve ser maior que zero')
    }

    if (this.validateStatus()) {
      this.credit(amount)
      console.log(`Depósito de ${amount} realizado com sucesso.`)
      this.getBalance()
    }
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error('O valor do saque deve ser maior que zero')
    }

    if (this.validateStatus() && this.hasSufficientBalance(amount)) {
      this.debit(amount)
      console.log(`Saque de ${amount} realizado com sucesso.`)
      this.getBalance()
    }
  }

  protected credit(amount: number): void {
    this.balance += amount
  }

  protected debit(amount: number): void {
    this.balance -= amount
  }

  protected hasSufficientBalance(amount: number): boolean {
    if (this.balance > amount) {
      return true
    }

    throw new Error('Saldo insuficiente para essa operação')
  }

  protected validateStatus(): boolean {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
