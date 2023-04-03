require('dotenv').config();
import { describe, expect, it } from "vitest";
import Wallet from "./wallet";

describe("Wallet Entity", () => {
    it('should create a Wallet Instance', () => {
        const newWallet = new Wallet({
            address: "0xmy_pub",
            balance: 1,
            privateKey: "0xmy_pk"
        })

        expect(newWallet.privateKey).toBe("0xmy_pk")
        expect(newWallet.balance).toBe(1)
        expect(newWallet.address).toBe("0xmy_pub")
    })

    it('should create a Wallet Instance loading the private key from the env variable', () => {
        const pk: string = process.env.PRIVATE_KEY || "0x"
        const newWallet = new Wallet({
            address: "0xmy_pub",
            balance: 1,
            privateKey: pk
        })

        expect(newWallet.privateKey).toBe("0xmy_pk")
        expect(newWallet.balance).toBe(1)
        expect(newWallet.address).toBe("0xmy_pub")
    })
})