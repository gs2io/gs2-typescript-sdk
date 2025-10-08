import IModel from '../../core/interface/IModel';
export default class LotteryNamespaceDrawDistributionSegment implements IModel {
    private lotteryName;
    private count;
    getLotteryName(): string | null;
    setLotteryName(lotteryName: string | null): this;
    withLotteryName(lotteryName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDrawDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
