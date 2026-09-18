import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

console.log('--- Conta Pessoal ---')
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.getName())
peopleAccount.deposit(100)
peopleAccount.withdraw(30)
peopleAccount.getBalance()

console.log('\n--- Conta Empresarial ---')
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(500)
companyAccount.getLoan(1000)
companyAccount.getBalance()

console.log('\n--- Conta com Bônus ---')
const bonusAccount: BonusAccount = new BonusAccount('Emily', 30)
bonusAccount.deposit(100)
bonusAccount.getBalance()
