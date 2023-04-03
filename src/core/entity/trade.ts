export interface TradeProps {
    tokenAddress: string;
    amount: number;
    targetAddress: string;
}

export default class Trade {
    constructor(private props: TradeProps) { }
    get amount(): number { return this.props.amount }
    get tokenAddress(): string { return this.props.tokenAddress }
    get targetAddress(): string { return this.props.targetAddress }
}