import { describe, it, expect } from 'vitest'
import Trade from './trade'

describe("Trade Entity", () => {
    it('should create a trade instance', () => {
        const newTrade = new Trade({
            tokenAddress: "0xtoken",
            amount: 0.1,
            targetAddress: "0xmy_pub"
        })
        expect(newTrade.tokenAddress).toBe("0xtoken")
        expect(newTrade.amount).toBe(0.1)
        expect(newTrade.targetAddress).toBe("0xmy_pub")
    })
})