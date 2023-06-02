import IModel from '../../core/interface/IModel';
import MoneyNamespaceVerificationDistributionStatistics from './MoneyNamespaceVerificationDistributionStatistics';
import MoneyNamespaceVerificationDistributionSegment from './MoneyNamespaceVerificationDistributionSegment';
export default class MoneyNamespaceVerificationDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MoneyNamespaceVerificationDistributionStatistics | null;
    setStatistics(statistics: MoneyNamespaceVerificationDistributionStatistics | null): this;
    withStatistics(statistics: MoneyNamespaceVerificationDistributionStatistics | null): this;
    getDistribution(): MoneyNamespaceVerificationDistributionSegment[] | null;
    setDistribution(distribution: MoneyNamespaceVerificationDistributionSegment[] | null): this;
    withDistribution(distribution: MoneyNamespaceVerificationDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceVerificationDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
