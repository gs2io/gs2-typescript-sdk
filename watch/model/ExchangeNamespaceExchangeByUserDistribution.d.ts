import IModel from '../../core/interface/IModel';
import ExchangeNamespaceExchangeByUserDistributionStatistics from './ExchangeNamespaceExchangeByUserDistributionStatistics';
import ExchangeNamespaceExchangeByUserDistributionSegment from './ExchangeNamespaceExchangeByUserDistributionSegment';
export default class ExchangeNamespaceExchangeByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExchangeNamespaceExchangeByUserDistributionStatistics | null;
    setStatistics(statistics: ExchangeNamespaceExchangeByUserDistributionStatistics | null): this;
    withStatistics(statistics: ExchangeNamespaceExchangeByUserDistributionStatistics | null): this;
    getDistribution(): ExchangeNamespaceExchangeByUserDistributionSegment[] | null;
    setDistribution(distribution: ExchangeNamespaceExchangeByUserDistributionSegment[] | null): this;
    withDistribution(distribution: ExchangeNamespaceExchangeByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceExchangeByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
