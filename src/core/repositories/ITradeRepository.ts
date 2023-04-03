import Wallet from "../entity/wallet";

export default interface ITradeRepository {
    getWalletByAddress: (address: string) => Promise<Wallet | undefined>
    updateWallet: (wallet: Wallet) => Promise<Wallet>
}