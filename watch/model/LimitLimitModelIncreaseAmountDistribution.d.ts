import IModel from '../../core/interface/IModel';
import LimitLimitModelIncreaseAmountDistributionStatistics from './LimitLimitModelIncreaseAmountDistributionStatistics';
import LimitLimitModelIncreaseAmountDistributionSegment from './LimitLimitModelIncreaseAmountDistributionSegment';
export default class LimitLimitModelIncreaseAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): LimitLimitModelIncreaseAmountDistributionStatistics | null;
    setStatistics(statistics: LimitLimitModelIncreaseAmountDistributionStatistics | null): this;
    withStatistics(statistics: LimitLimitModelIncreaseAmountDistributionStatistics | null): this;
    getDistribution(): LimitLimitModelIncreaseAmountDistributionSegment[] | null;
    setDistribution(distribution: LimitLimitModelIncreaseAmountDistributionSegment[] | null): this;
    withDistribution(distribution: LimitLimitModelIncreaseAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModelIncreaseAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
