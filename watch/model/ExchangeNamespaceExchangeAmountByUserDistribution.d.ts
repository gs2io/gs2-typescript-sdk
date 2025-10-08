import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExchangeNamespaceExchangeAmountByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ExchangeNamespaceExchangeAmountByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceExchangeAmountByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
