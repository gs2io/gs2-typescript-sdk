import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MoneyReceiptVerificationByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MoneyReceiptVerificationByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MoneyReceiptVerificationByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MoneyReceiptVerificationByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MoneyReceiptVerificationByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MoneyReceiptVerificationByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MoneyReceiptVerificationByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyReceiptVerificationByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
