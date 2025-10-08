import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MoneyWalletPaidDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MoneyWalletPaidDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MoneyWalletPaidDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MoneyWalletPaidDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MoneyWalletPaidDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MoneyWalletPaidDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MoneyWalletPaidDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyWalletPaidDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
