import IModel from '../../core/interface/IModel';
import LotteryNamespaceDrawAmountByUserDistributionStatistics from './LotteryNamespaceDrawAmountByUserDistributionStatistics';
import LotteryNamespaceDrawAmountByUserDistributionSegment from './LotteryNamespaceDrawAmountByUserDistributionSegment';
export default class LotteryNamespaceDrawAmountByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): LotteryNamespaceDrawAmountByUserDistributionStatistics | null;
    setStatistics(statistics: LotteryNamespaceDrawAmountByUserDistributionStatistics | null): this;
    withStatistics(statistics: LotteryNamespaceDrawAmountByUserDistributionStatistics | null): this;
    getDistribution(): LotteryNamespaceDrawAmountByUserDistributionSegment[] | null;
    setDistribution(distribution: LotteryNamespaceDrawAmountByUserDistributionSegment[] | null): this;
    withDistribution(distribution: LotteryNamespaceDrawAmountByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDrawAmountByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
