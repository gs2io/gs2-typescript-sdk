import IModel from '../../core/interface/IModel';
import MoneyWalletPaidDistributionStatistics from './MoneyWalletPaidDistributionStatistics';
import MoneyWalletPaidDistributionSegment from './MoneyWalletPaidDistributionSegment';
export default class MoneyWalletPaidDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MoneyWalletPaidDistributionStatistics | null;
    setStatistics(statistics: MoneyWalletPaidDistributionStatistics | null): this;
    withStatistics(statistics: MoneyWalletPaidDistributionStatistics | null): this;
    getDistribution(): MoneyWalletPaidDistributionSegment[] | null;
    setDistribution(distribution: MoneyWalletPaidDistributionSegment[] | null): this;
    withDistribution(distribution: MoneyWalletPaidDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyWalletPaidDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
