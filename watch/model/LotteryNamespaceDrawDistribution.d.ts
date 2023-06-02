import IModel from '../../core/interface/IModel';
import LotteryNamespaceDrawDistributionStatistics from './LotteryNamespaceDrawDistributionStatistics';
import LotteryNamespaceDrawDistributionSegment from './LotteryNamespaceDrawDistributionSegment';
export default class LotteryNamespaceDrawDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): LotteryNamespaceDrawDistributionStatistics | null;
    setStatistics(statistics: LotteryNamespaceDrawDistributionStatistics | null): this;
    withStatistics(statistics: LotteryNamespaceDrawDistributionStatistics | null): this;
    getDistribution(): LotteryNamespaceDrawDistributionSegment[] | null;
    setDistribution(distribution: LotteryNamespaceDrawDistributionSegment[] | null): this;
    withDistribution(distribution: LotteryNamespaceDrawDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDrawDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
