import IModel from '../../core/interface/IModel';
import MoneyWalletFreeDistributionStatistics from './MoneyWalletFreeDistributionStatistics';
import MoneyWalletFreeDistributionSegment from './MoneyWalletFreeDistributionSegment';
export default class MoneyWalletFreeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MoneyWalletFreeDistributionStatistics | null;
    setStatistics(statistics: MoneyWalletFreeDistributionStatistics | null): this;
    withStatistics(statistics: MoneyWalletFreeDistributionStatistics | null): this;
    getDistribution(): MoneyWalletFreeDistributionSegment[] | null;
    setDistribution(distribution: MoneyWalletFreeDistributionSegment[] | null): this;
    withDistribution(distribution: MoneyWalletFreeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyWalletFreeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
