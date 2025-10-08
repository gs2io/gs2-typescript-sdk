import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MoneyNamespaceRevenueDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MoneyNamespaceRevenueDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MoneyNamespaceRevenueDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MoneyNamespaceRevenueDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MoneyNamespaceRevenueDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MoneyNamespaceRevenueDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MoneyNamespaceRevenueDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceRevenueDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
