import IModel from '../../core/interface/IModel';
import MissionCounterCounterDistributionStatistics from './MissionCounterCounterDistributionStatistics';
import MissionCounterCounterDistributionSegment from './MissionCounterCounterDistributionSegment';
export default class MissionCounterCounterDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MissionCounterCounterDistributionStatistics | null;
    setStatistics(statistics: MissionCounterCounterDistributionStatistics | null): this;
    withStatistics(statistics: MissionCounterCounterDistributionStatistics | null): this;
    getDistribution(): MissionCounterCounterDistributionSegment[] | null;
    setDistribution(distribution: MissionCounterCounterDistributionSegment[] | null): this;
    withDistribution(distribution: MissionCounterCounterDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionCounterCounterDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
