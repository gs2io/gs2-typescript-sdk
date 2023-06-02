import IModel from '../../core/interface/IModel';
import ExchangeNamespaceExchangeAmountDistributionStatistics from './ExchangeNamespaceExchangeAmountDistributionStatistics';
import ExchangeNamespaceExchangeAmountDistributionSegment from './ExchangeNamespaceExchangeAmountDistributionSegment';
export default class ExchangeNamespaceExchangeAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExchangeNamespaceExchangeAmountDistributionStatistics | null;
    setStatistics(statistics: ExchangeNamespaceExchangeAmountDistributionStatistics | null): this;
    withStatistics(statistics: ExchangeNamespaceExchangeAmountDistributionStatistics | null): this;
    getDistribution(): ExchangeNamespaceExchangeAmountDistributionSegment[] | null;
    setDistribution(distribution: ExchangeNamespaceExchangeAmountDistributionSegment[] | null): this;
    withDistribution(distribution: ExchangeNamespaceExchangeAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespaceExchangeAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
