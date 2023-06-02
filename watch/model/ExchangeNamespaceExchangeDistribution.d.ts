import IModel from '../../core/interface/IModel';
import ExchangeNamespaceExchangeDistributionStatistics from './ExchangeNamespaceExchangeDistributionStatistics';
import ExchangeNamespaceExchangeDistributionSegment from './ExchangeNamespaceExchangeDistributionSegment';
export default class ExchangeNamespaceExchangeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExchangeNamespaceExchangeDistributionStatistics | null;
    setStatistics(statistics: ExchangeNamespaceExchangeDistributionStatistics | null): this;
    withStatistics(statistics: ExchangeNamespaceExchangeDistributionStatistics | null): this;
    getDistribution(): ExchangeNamespaceExchangeDistributionSegment[] | null;
    setDistribution(distribution: ExchangeNamespaceExchangeDistributionSegment[] | null): this;
    withDistribution(distribution: ExchangeNamespaceExchangeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceExchangeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
