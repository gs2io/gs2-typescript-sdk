import IModel from '../../core/interface/IModel';
import LimitLimitModelIncreaseAmountByUserDistributionStatistics from './LimitLimitModelIncreaseAmountByUserDistributionStatistics';
import LimitLimitModelIncreaseAmountByUserDistributionSegment from './LimitLimitModelIncreaseAmountByUserDistributionSegment';
export default class LimitLimitModelIncreaseAmountByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): LimitLimitModelIncreaseAmountByUserDistributionStatistics | null;
    setStatistics(statistics: LimitLimitModelIncreaseAmountByUserDistributionStatistics | null): this;
    withStatistics(statistics: LimitLimitModelIncreaseAmountByUserDistributionStatistics | null): this;
    getDistribution(): LimitLimitModelIncreaseAmountByUserDistributionSegment[] | null;
    setDistribution(distribution: LimitLimitModelIncreaseAmountByUserDistributionSegment[] | null): this;
    withDistribution(distribution: LimitLimitModelIncreaseAmountByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModelIncreaseAmountByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
