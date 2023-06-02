import IModel from '../../core/interface/IModel';
import MoneyNamespaceDepositDistributionStatistics from './MoneyNamespaceDepositDistributionStatistics';
import MoneyNamespaceDepositDistributionSegment from './MoneyNamespaceDepositDistributionSegment';
export default class MoneyNamespaceDepositDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MoneyNamespaceDepositDistributionStatistics | null;
    setStatistics(statistics: MoneyNamespaceDepositDistributionStatistics | null): this;
    withStatistics(statistics: MoneyNamespaceDepositDistributionStatistics | null): this;
    getDistribution(): MoneyNamespaceDepositDistributionSegment[] | null;
    setDistribution(distribution: MoneyNamespaceDepositDistributionSegment[] | null): this;
    withDistribution(distribution: MoneyNamespaceDepositDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceDepositDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
