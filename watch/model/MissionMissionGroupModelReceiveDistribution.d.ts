import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MissionMissionGroupModelReceiveDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MissionMissionGroupModelReceiveDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MissionMissionGroupModelReceiveDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MissionMissionGroupModelReceiveDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MissionMissionGroupModelReceiveDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MissionMissionGroupModelReceiveDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MissionMissionGroupModelReceiveDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionMissionGroupModelReceiveDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
