import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExchangeNamespaceExchangeByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ExchangeNamespaceExchangeByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ExchangeNamespaceExchangeByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExchangeNamespaceExchangeByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ExchangeNamespaceExchangeByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ExchangeNamespaceExchangeByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ExchangeNamespaceExchangeByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceExchangeByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
