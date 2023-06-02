import IModel from '../../core/interface/IModel';
import MoneyNamespaceWithdrawDistributionStatistics from './MoneyNamespaceWithdrawDistributionStatistics';
import MoneyNamespaceWithdrawDistributionSegment from './MoneyNamespaceWithdrawDistributionSegment';
export default class MoneyNamespaceWithdrawDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MoneyNamespaceWithdrawDistributionStatistics | null;
    setStatistics(statistics: MoneyNamespaceWithdrawDistributionStatistics | null): this;
    withStatistics(statistics: MoneyNamespaceWithdrawDistributionStatistics | null): this;
    getDistribution(): MoneyNamespaceWithdrawDistributionSegment[] | null;
    setDistribution(distribution: MoneyNamespaceWithdrawDistributionSegment[] | null): this;
    withDistribution(distribution: MoneyNamespaceWithdrawDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceWithdrawDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
