import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LotteryNamespaceDrawDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.LotteryNamespaceDrawDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.LotteryNamespaceDrawDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LotteryNamespaceDrawDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.LotteryNamespaceDrawDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.LotteryNamespaceDrawDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.LotteryNamespaceDrawDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDrawDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
