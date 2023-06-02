import IModel from '../../core/interface/IModel';
import MissionMissionGroupModelReceiveDistributionStatistics from './MissionMissionGroupModelReceiveDistributionStatistics';
import MissionMissionGroupModelReceiveDistributionSegment from './MissionMissionGroupModelReceiveDistributionSegment';
export default class MissionMissionGroupModelReceiveDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MissionMissionGroupModelReceiveDistributionStatistics | null;
    setStatistics(statistics: MissionMissionGroupModelReceiveDistributionStatistics | null): this;
    withStatistics(statistics: MissionMissionGroupModelReceiveDistributionStatistics | null): this;
    getDistribution(): MissionMissionGroupModelReceiveDistributionSegment[] | null;
    setDistribution(distribution: MissionMissionGroupModelReceiveDistributionSegment[] | null): this;
    withDistribution(distribution: MissionMissionGroupModelReceiveDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionMissionGroupModelReceiveDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
