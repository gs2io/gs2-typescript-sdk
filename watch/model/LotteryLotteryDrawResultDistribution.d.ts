import IModel from '../../core/interface/IModel';
import LotteryLotteryDrawResultDistributionStatistics from './LotteryLotteryDrawResultDistributionStatistics';
import LotteryLotteryDrawResultDistributionSegment from './LotteryLotteryDrawResultDistributionSegment';
export default class LotteryLotteryDrawResultDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): LotteryLotteryDrawResultDistributionStatistics | null;
    setStatistics(statistics: LotteryLotteryDrawResultDistributionStatistics | null): this;
    withStatistics(statistics: LotteryLotteryDrawResultDistributionStatistics | null): this;
    getDistribution(): LotteryLotteryDrawResultDistributionSegment[] | null;
    setDistribution(distribution: LotteryLotteryDrawResultDistributionSegment[] | null): this;
    withDistribution(distribution: LotteryLotteryDrawResultDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryLotteryDrawResultDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
