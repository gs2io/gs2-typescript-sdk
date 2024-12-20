import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExchangeNamespaceExchangeAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ExchangeNamespaceExchangeAmountDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ExchangeNamespaceExchangeAmountDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExchangeNamespaceExchangeAmountDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ExchangeNamespaceExchangeAmountDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ExchangeNamespaceExchangeAmountDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ExchangeNamespaceExchangeAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceExchangeAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
