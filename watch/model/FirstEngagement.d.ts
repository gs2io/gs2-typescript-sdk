import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FirstEngagement implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.FirstEngagementStatistics | null;
    setStatistics(statistics: Gs2Watch.FirstEngagementStatistics | null): this;
    withStatistics(statistics: Gs2Watch.FirstEngagementStatistics | null): this;
    getDistribution(): Gs2Watch.FirstEngagementDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.FirstEngagementDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.FirstEngagementDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FirstEngagement | null;
    toDict(): {
        [key: string]: any;
    };
}
