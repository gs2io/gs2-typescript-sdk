import IModel from '../../core/interface/IModel';
import LimitCounterCounterDistributionStatistics from './LimitCounterCounterDistributionStatistics';
import LimitCounterCounterDistributionSegment from './LimitCounterCounterDistributionSegment';
export default class LimitCounterCounterDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): LimitCounterCounterDistributionStatistics | null;
    setStatistics(statistics: LimitCounterCounterDistributionStatistics | null): this;
    withStatistics(statistics: LimitCounterCounterDistributionStatistics | null): this;
    getDistribution(): LimitCounterCounterDistributionSegment[] | null;
    setDistribution(distribution: LimitCounterCounterDistributionSegment[] | null): this;
    withDistribution(distribution: LimitCounterCounterDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitCounterCounterDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
