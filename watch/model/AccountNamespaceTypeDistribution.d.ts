import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class AccountNamespaceTypeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.AccountNamespaceTypeDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.AccountNamespaceTypeDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.AccountNamespaceTypeDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.AccountNamespaceTypeDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.AccountNamespaceTypeDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.AccountNamespaceTypeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccountNamespaceTypeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
