import IModel from '../../core/interface/IModel';
import LotteryNamespaceDrawAmountDistributionStatistics from './LotteryNamespaceDrawAmountDistributionStatistics';
import LotteryNamespaceDrawAmountDistributionSegment from './LotteryNamespaceDrawAmountDistributionSegment';
export default class LotteryNamespaceDrawAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): LotteryNamespaceDrawAmountDistributionStatistics | null;
    setStatistics(statistics: LotteryNamespaceDrawAmountDistributionStatistics | null): this;
    withStatistics(statistics: LotteryNamespaceDrawAmountDistributionStatistics | null): this;
    getDistribution(): LotteryNamespaceDrawAmountDistributionSegment[] | null;
    setDistribution(distribution: LotteryNamespaceDrawAmountDistributionSegment[] | null): this;
    withDistribution(distribution: LotteryNamespaceDrawAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDrawAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
