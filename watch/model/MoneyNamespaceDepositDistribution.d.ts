import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MoneyNamespaceDepositDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MoneyNamespaceDepositDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MoneyNamespaceDepositDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MoneyNamespaceDepositDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MoneyNamespaceDepositDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MoneyNamespaceDepositDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MoneyNamespaceDepositDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceDepositDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
