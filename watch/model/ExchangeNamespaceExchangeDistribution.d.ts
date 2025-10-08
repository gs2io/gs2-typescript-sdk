import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExchangeNamespaceExchangeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ExchangeNamespaceExchangeDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ExchangeNamespaceExchangeDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ExchangeNamespaceExchangeDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ExchangeNamespaceExchangeDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ExchangeNamespaceExchangeDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ExchangeNamespaceExchangeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceExchangeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
