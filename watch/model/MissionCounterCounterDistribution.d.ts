import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MissionCounterCounterDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MissionCounterCounterDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MissionCounterCounterDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MissionCounterCounterDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MissionCounterCounterDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MissionCounterCounterDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MissionCounterCounterDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionCounterCounterDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
