export interface WalletProps {
    privateKey: string
    address: string
    balance: number
}

export default class Wallet {
    constructor(private props: WalletProps) {}
    get privateKey(): string {return this.props.privateKey }
    get address(): string { return this.props.address }
    get balance(): number { return this.props.balance }
    updateBalance(amount: number) { this.props.balance -= amount }
  }