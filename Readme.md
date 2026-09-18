# Desenvolvendo o Dio Bank

Desafio da trilha [Digital Innovation One](https://www.dio.me) — "Construindo Uma App Simples de Banco Com TypeScript".

Template original por [Nathally Souza](https://github.com/nathyts) · Resolvido por [Emily Susan da Silva](https://www.linkedin.com/in/rainhadamidia)

#### Projeto desenvolvido com conceitos básicos de TypeScript (POO: herança, encapsulamento e polimorfismo)

### Tecnologias
- TypeScript
- Node.js

### Como rodar o projeto

1 - Clone o repositório

2 - Instale as dependências

    npm install

3 - Execute o projeto

    npm run dev

#### Desafios

[x] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
  - Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
  - Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques

[x] Implementar o método de empréstimo (getLoan) na classe CompanyAccount
  - Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
  - Apenas contas com o status true podem fazer empréstimo

[x] Criar um novo tipo de conta a partir da DioAccount
  - Esta conta não deve receber novos atributos
  - Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)

[x] Todos os atributos de qualquer conta devem ser privados

[x] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

[x] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

### Decisões técnicas

- `credit`, `debit`, `hasSufficientBalance` e `validateStatus` foram promovidos a métodos `protected` na classe base `DioAccount`, permitindo que as subclasses (`CompanyAccount`, `BonusAccount`) alterem o saldo e validem regras de negócio sem quebrar o encapsulamento do atributo privado `balance`.
- O método `setName` foi removido: como `name` e `accountNumber` não podem ser alterados após a criação da conta, expor um setter violaria essa regra.
- `BonusAccount.deposit` reaproveita `super.deposit()` (com o valor acrescido de 10) em vez de duplicar a lógica de crédito — evita repetição e mantém as regras de validação centralizadas na classe base.
- Métodos foram escritos como métodos de classe padrão (não como propriedades com arrow function), já que `super.metodo()` só funciona corretamente com métodos na cadeia de protótipos.
- Fixada a versão de `@types/node` no `package.json` (o template original não fixava, o que quebrava a checagem de tipos com o TypeScript 4.9 em instalações novas) e trocado `ts-node-dev` (não é mais mantido) por `tsx` para rodar o projeto em TypeScript sem downgrade de versão do Node.
