import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LotteryNamespaceDrawAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.LotteryNamespaceDrawAmountDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.LotteryNamespaceDrawAmountDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LotteryNamespaceDrawAmountDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.LotteryNamespaceDrawAmountDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.LotteryNamespaceDrawAmountDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.LotteryNamespaceDrawAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LotteryNamespaceDrawAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
