# [x] Create a BankAccount class with the attributes interest rate and balance
# [x] Add a deposit method to the BankAccount class
# [x] Add a withdraw method to the BankAccount class
# [x] Add a display_account_info method to the BankAccount class
# [x] Add a yield_interest method to the BankAccount class
# [x] Create 2 accounts
# To the first account,
# [x] make 3 deposits and
# [x] 1 withdrawal, then
# [x] yield interest and
# [x] display the account's info all in one line of code (i.e. chaining)
# To the second account,
# [x] make 2 deposits and
# [x] 4 withdrawals, then
# [x] yield interest and
# [x] display the account's info all in one line of code (i.e. chaining)


class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate_param, balance_param):
        # your code here! (remember, this is where we specify the attributes for our class)
        # don't worry about user info here; we'll involve the User class soon
        print('We are initializing a BankAccount!')
        self.int_rate = int_rate_param
        self.balance = balance_param
        print(f'Current balance: {self.balance}')
        # return self

    def deposit(self, amount):
        # your code here
        print(f'Depositing {amount}')
        self.balance += amount
        # self.balance = self.balance + amount
        print('💰')
        return self

    def withdraw(self, amount):
        # your code here
        print(f'Withdrawing {amount}')
        self.balance -= amount
        # self.balance = self.balance - amount
        print('💸')
        return self

    def display_account_info(self):
        # your code here
        print(f'Interest Rate: {self.int_rate}')
        print(f'Current Balance: {self.balance}')
        return self

    def yield_interest(self):
        # your code here
        # self.balance += self.int_rate * self.balance
        print(f'Yielding Interest: {self.int_rate}')
        self.balance = self.balance + (self.int_rate * self.balance)
        return self


personal_luis = BankAccount(0.01, 0).deposit(500).deposit(500).deposit(
    500).withdraw(100).yield_interest().display_account_info()
business_luis = BankAccount(0.02, 200).deposit(1000).deposit(100).withdraw(
    50).withdraw(50).withdraw(50).withdraw(50).yield_interest().display_account_info()
# personal.display_account_info()
# business.display_account_info()
