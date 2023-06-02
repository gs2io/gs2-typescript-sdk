import IModel from '../../core/interface/IModel';
export default class LotteryLotteryDrawResultDistributionSegment implements IModel {
    private prizeId;
    private count;
    getPrizeId(): string | null;
    setPrizeId(prizeId: string | null): this;
    withPrizeId(prizeId: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryLotteryDrawResultDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
