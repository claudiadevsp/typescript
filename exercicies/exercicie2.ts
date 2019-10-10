type BankAccount = { 
    balance: number, 
    deposit: (value: number) => void 
}  
 
let bankAccount : BankAccount = {
    balance: 1,
    deposit(value: number) {
        this.balance += value
    }
}

type AccountHolder = {
    name: string, 
    bankAccount: BankAccount, 
    contacts: string[]
}


let accountHolder: AccountHolder = {
    name: 'Ana Silva',
    bankAccount: bankAccount,
    contacts: ['34567890', '98765432']
}
 
accountHolder.bankAccount.deposit(3000)
console.log(accountHolder)


 
