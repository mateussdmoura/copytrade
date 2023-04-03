import Wallet from '../entity/wallet';
import Trade from '../entity/trade';
import ITradeRepository from "../repositories/ITradeRepository"
import InsufficientBalanceError from '../error/InsufficientBalance';
import { Transaction } from '../entity/transaction';

export interface ExecuteSingleTradeRequest {
    trade: Trade
}

export type ExecuteSingleTradeResponse = Transaction

export default class ExecuteSingleTrade {
    constructor(private tradeRepo: ITradeRepository) {}

    async execute(props: ExecuteSingleTradeRequest): Promise<Transaction> {
        const wallet = await this.tradeRepo.getWalletByAddress(props.trade.targetAddress)
        if (!wallet) {
            throw new Error(`Wallet with address ${props.trade.targetAddress}`)
        }
        const transaction = new Transaction({trade: props.trade, wallet: wallet})
        wallet.updateBalance(props.trade.amount)
        await this.tradeRepo.updateWallet(wallet)
        return transaction
    }
}