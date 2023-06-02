import IModel from '../../core/interface/IModel';
import LimitLimitModelIncreaseDistributionStatistics from './LimitLimitModelIncreaseDistributionStatistics';
import LimitLimitModelIncreaseDistributionSegment from './LimitLimitModelIncreaseDistributionSegment';
export default class LimitLimitModelIncreaseDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): LimitLimitModelIncreaseDistributionStatistics | null;
    setStatistics(statistics: LimitLimitModelIncreaseDistributionStatistics | null): this;
    withStatistics(statistics: LimitLimitModelIncreaseDistributionStatistics | null): this;
    getDistribution(): LimitLimitModelIncreaseDistributionSegment[] | null;
    setDistribution(distribution: LimitLimitModelIncreaseDistributionSegment[] | null): this;
    withDistribution(distribution: LimitLimitModelIncreaseDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModelIncreaseDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
