import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MoneyNamespaceVerificationDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MoneyNamespaceVerificationDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MoneyNamespaceVerificationDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MoneyNamespaceVerificationDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MoneyNamespaceVerificationDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MoneyNamespaceVerificationDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MoneyNamespaceVerificationDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceVerificationDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
