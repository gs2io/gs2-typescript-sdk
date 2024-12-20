import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MoneyWalletFreeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MoneyWalletFreeDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MoneyWalletFreeDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MoneyWalletFreeDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MoneyWalletFreeDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MoneyWalletFreeDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MoneyWalletFreeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyWalletFreeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
