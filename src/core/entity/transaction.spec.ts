import { describe, expect, it } from "vitest";
import { Transaction } from "./transaction";
import Wallet from "./wallet";
import Trade from "./trade";
import InsufficientBalanceError from "../error/InsufficientBalance";

describe('Transaction Entity', () => {
    it('should create a trasaction', () => {
        const newTrade = new Trade({
            tokenAddress: "0xtoken",
            amount: 0.1,
            targetAddress: "0xmy_pub"
        })
        const newWallet = new Wallet({
            address: "0xmy_pub",
            balance: 1,
            privateKey: "0xmy_pk"
        })
        const sut = new Transaction({ trade: newTrade, wallet: newWallet })
        expect(sut.trade).toBe(newTrade)
        expect(sut.wallet).toBe(newWallet)
    })
    it('should throw InsufficientBalanceError', () => {
        const newWallet = new Wallet({
            address: "0xmy_pub",
            balance: 0.1,
            privateKey: "0xmy_pk"
        })
        const newTrade = new Trade({
            tokenAddress: "0xtoken",
            amount: 1,
            targetAddress: "0xmy_pub"
        })
    
        expect(() => new Transaction({ trade: newTrade, wallet: newWallet })).toThrowError(InsufficientBalanceError)
    })
    
})