import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LotteryLotteryDrawResultDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.LotteryLotteryDrawResultDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.LotteryLotteryDrawResultDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LotteryLotteryDrawResultDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.LotteryLotteryDrawResultDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.LotteryLotteryDrawResultDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.LotteryLotteryDrawResultDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryLotteryDrawResultDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
