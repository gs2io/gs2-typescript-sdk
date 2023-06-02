import IModel from '../../core/interface/IModel';
import MoneyNamespaceRevenueDistributionStatistics from './MoneyNamespaceRevenueDistributionStatistics';
import MoneyNamespaceRevenueDistributionSegment from './MoneyNamespaceRevenueDistributionSegment';
export default class MoneyNamespaceRevenueDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MoneyNamespaceRevenueDistributionStatistics | null;
    setStatistics(statistics: MoneyNamespaceRevenueDistributionStatistics | null): this;
    withStatistics(statistics: MoneyNamespaceRevenueDistributionStatistics | null): this;
    getDistribution(): MoneyNamespaceRevenueDistributionSegment[] | null;
    setDistribution(distribution: MoneyNamespaceRevenueDistributionSegment[] | null): this;
    withDistribution(distribution: MoneyNamespaceRevenueDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceRevenueDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
