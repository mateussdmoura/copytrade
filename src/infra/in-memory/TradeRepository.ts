import Wallet from '../../core/entity/wallet';
import ITradeRepository from "../../core/repositories/ITradeRepository";

export default class TradeRepository implements ITradeRepository {
    items: Wallet[] = [new Wallet({
        address: "0xmy_pub",
        balance: 1,
        privateKey: "0xmy_pk"
    })]

    async getWalletByAddress(address: string): Promise<Wallet | undefined> {
        const wallet = this.items.find(item => item.address === address)
        return wallet
    }
    async updateWallet(wallet: Wallet): Promise<Wallet> {
        return new Wallet({
            address: "",
            balance: 1,
            privateKey: ""
        })
    }
}