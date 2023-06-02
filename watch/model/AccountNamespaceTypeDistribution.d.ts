import IModel from '../../core/interface/IModel';
import AccountNamespaceTypeDistributionStatistics from './AccountNamespaceTypeDistributionStatistics';
import AccountNamespaceTypeDistributionSegment from './AccountNamespaceTypeDistributionSegment';
export default class AccountNamespaceTypeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): AccountNamespaceTypeDistributionStatistics | null;
    setStatistics(statistics: AccountNamespaceTypeDistributionStatistics | null): this;
    withStatistics(statistics: AccountNamespaceTypeDistributionStatistics | null): this;
    getDistribution(): AccountNamespaceTypeDistributionSegment[] | null;
    setDistribution(distribution: AccountNamespaceTypeDistributionSegment[] | null): this;
    withDistribution(distribution: AccountNamespaceTypeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccountNamespaceTypeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
