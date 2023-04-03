import { describe, it } from 'vitest';
import Trade from '../entity/trade';
import Wallet from '../entity/wallet';
import ExecuteSingleTrade from './ExecuteSingleTrade';
import TradeRepository from '../../infra/in-memory/TradeRepository';

describe("ExecuteSingleTrade usecase", () => {
    it('should execute the usecase accordingly', () => {
        const newTrade = new Trade({
            targetAddress: "0xmy_pub",
            amount: 0.1,
            tokenAddress: "0xtoken"
        })
        const sut = new ExecuteSingleTrade(TradeRepository)
        
    })
})