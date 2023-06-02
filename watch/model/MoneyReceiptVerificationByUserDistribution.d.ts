import IModel from '../../core/interface/IModel';
import MoneyReceiptVerificationByUserDistributionStatistics from './MoneyReceiptVerificationByUserDistributionStatistics';
import MoneyReceiptVerificationByUserDistributionSegment from './MoneyReceiptVerificationByUserDistributionSegment';
export default class MoneyReceiptVerificationByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MoneyReceiptVerificationByUserDistributionStatistics | null;
    setStatistics(statistics: MoneyReceiptVerificationByUserDistributionStatistics | null): this;
    withStatistics(statistics: MoneyReceiptVerificationByUserDistributionStatistics | null): this;
    getDistribution(): MoneyReceiptVerificationByUserDistributionSegment[] | null;
    setDistribution(distribution: MoneyReceiptVerificationByUserDistributionSegment[] | null): this;
    withDistribution(distribution: MoneyReceiptVerificationByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyReceiptVerificationByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
