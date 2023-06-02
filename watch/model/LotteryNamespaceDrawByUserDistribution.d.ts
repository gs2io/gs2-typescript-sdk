import IModel from '../../core/interface/IModel';
import LotteryNamespaceDrawByUserDistributionStatistics from './LotteryNamespaceDrawByUserDistributionStatistics';
import LotteryNamespaceDrawByUserDistributionSegment from './LotteryNamespaceDrawByUserDistributionSegment';
export default class LotteryNamespaceDrawByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): LotteryNamespaceDrawByUserDistributionStatistics | null;
    setStatistics(statistics: LotteryNamespaceDrawByUserDistributionStatistics | null): this;
    withStatistics(statistics: LotteryNamespaceDrawByUserDistributionStatistics | null): this;
    getDistribution(): LotteryNamespaceDrawByUserDistributionSegment[] | null;
    setDistribution(distribution: LotteryNamespaceDrawByUserDistributionSegment[] | null): this;
    withDistribution(distribution: LotteryNamespaceDrawByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDrawByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
