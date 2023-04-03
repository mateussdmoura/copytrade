export default class InsufficientBalanceError extends Error {
    constructor(balance: number, amount: number) {
      super(`Insufficient balance: ${balance}. Required: ${amount}`);
      this.name = 'InsufficientBalanceError';
    }
  }