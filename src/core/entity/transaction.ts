import Wallet from "./wallet";
import Trade from "./trade";
import InsufficientBalanceError from "../error/InsufficientBalance";

export interface TransactionProps {
    wallet: Wallet
    trade: Trade
}

export class Transaction {
    constructor(private props: TransactionProps) {
        if (this.props.wallet.balance < this.props.trade.amount) {
            throw new InsufficientBalanceError(this.props.wallet.balance, this.props.trade.amount);
        }
    }
    get wallet(): Wallet { return this.props.wallet }
    get trade(): Trade { return this.props.trade }
}