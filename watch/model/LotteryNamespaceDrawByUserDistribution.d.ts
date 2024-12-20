import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LotteryNamespaceDrawByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.LotteryNamespaceDrawByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.LotteryNamespaceDrawByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LotteryNamespaceDrawByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.LotteryNamespaceDrawByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.LotteryNamespaceDrawByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.LotteryNamespaceDrawByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDrawByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
