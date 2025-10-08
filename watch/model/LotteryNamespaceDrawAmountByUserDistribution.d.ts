import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LotteryNamespaceDrawAmountByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.LotteryNamespaceDrawAmountByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.LotteryNamespaceDrawAmountByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LotteryNamespaceDrawAmountByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.LotteryNamespaceDrawAmountByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.LotteryNamespaceDrawAmountByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.LotteryNamespaceDrawAmountByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDrawAmountByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
