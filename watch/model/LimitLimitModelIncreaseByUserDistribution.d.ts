import IModel from '../../core/interface/IModel';
import LimitLimitModelIncreaseByUserDistributionStatistics from './LimitLimitModelIncreaseByUserDistributionStatistics';
import LimitLimitModelIncreaseByUserDistributionSegment from './LimitLimitModelIncreaseByUserDistributionSegment';
export default class LimitLimitModelIncreaseByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): LimitLimitModelIncreaseByUserDistributionStatistics | null;
    setStatistics(statistics: LimitLimitModelIncreaseByUserDistributionStatistics | null): this;
    withStatistics(statistics: LimitLimitModelIncreaseByUserDistributionStatistics | null): this;
    getDistribution(): LimitLimitModelIncreaseByUserDistributionSegment[] | null;
    setDistribution(distribution: LimitLimitModelIncreaseByUserDistributionSegment[] | null): this;
    withDistribution(distribution: LimitLimitModelIncreaseByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModelIncreaseByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
