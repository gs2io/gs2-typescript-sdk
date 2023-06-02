import IModel from '../../core/interface/IModel';
import ExchangeRateModelAmountDistributionStatistics from './ExchangeRateModelAmountDistributionStatistics';
import ExchangeRateModelAmountDistributionSegment from './ExchangeRateModelAmountDistributionSegment';
export default class ExchangeRateModelAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ExchangeRateModelAmountDistributionStatistics | null;
    setStatistics(statistics: ExchangeRateModelAmountDistributionStatistics | null): this;
    withStatistics(statistics: ExchangeRateModelAmountDistributionStatistics | null): this;
    getDistribution(): ExchangeRateModelAmountDistributionSegment[] | null;
    setDistribution(distribution: ExchangeRateModelAmountDistributionSegment[] | null): this;
    withDistribution(distribution: ExchangeRateModelAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeRateModelAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
