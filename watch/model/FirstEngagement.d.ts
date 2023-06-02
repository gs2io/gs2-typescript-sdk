import IModel from '../../core/interface/IModel';
import FirstEngagementStatistics from './FirstEngagementStatistics';
import FirstEngagementDistributionSegment from './FirstEngagementDistributionSegment';
export default class FirstEngagement implements IModel {
    private statistics;
    private distribution;
    getStatistics(): FirstEngagementStatistics | null;
    setStatistics(statistics: FirstEngagementStatistics | null): this;
    withStatistics(statistics: FirstEngagementStatistics | null): this;
    getDistribution(): FirstEngagementDistributionSegment[] | null;
    setDistribution(distribution: FirstEngagementDistributionSegment[] | null): this;
    withDistribution(distribution: FirstEngagementDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FirstEngagement | null;
    toDict(): {
        [key: string]: any;
    };
}
