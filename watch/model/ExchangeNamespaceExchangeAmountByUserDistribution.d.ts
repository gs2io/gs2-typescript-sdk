import IModel from '../../core/interface/IModel';
import ExchangeNamespaceExchangeAmountByUserDistributionStatistics from './ExchangeNamespaceExchangeAmountByUserDistributionStatistics';
import ExchangeNamespaceExchangeAmountByUserDistributionSegment from './ExchangeNamespaceExchangeAmountByUserDistributionSegment';
export default class ExchangeNamespaceExchangeAmountByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExchangeNamespaceExchangeAmountByUserDistributionStatistics | null;
    setStatistics(statistics: ExchangeNamespaceExchangeAmountByUserDistributionStatistics | null): this;
    withStatistics(statistics: ExchangeNamespaceExchangeAmountByUserDistributionStatistics | null): this;
    getDistribution(): ExchangeNamespaceExchangeAmountByUserDistributionSegment[] | null;
    setDistribution(distribution: ExchangeNamespaceExchangeAmountByUserDistributionSegment[] | null): this;
    withDistribution(distribution: ExchangeNamespaceExchangeAmountByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceExchangeAmountByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
