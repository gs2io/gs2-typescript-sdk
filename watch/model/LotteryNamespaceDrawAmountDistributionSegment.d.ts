import IModel from '../../core/interface/IModel';
export default class LotteryNamespaceDrawAmountDistributionSegment implements IModel {
    private lotteryName;
    private sum;
    getLotteryName(): string | null;
    setLotteryName(lotteryName: string | null): this;
    withLotteryName(lotteryName: string | null): this;
    getSum(): number | null;
    setSum(sum: number | null): this;
    withSum(sum: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDrawAmountDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
