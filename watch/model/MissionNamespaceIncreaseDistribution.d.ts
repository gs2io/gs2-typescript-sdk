import IModel from '../../core/interface/IModel';
import MissionNamespaceIncreaseDistributionStatistics from './MissionNamespaceIncreaseDistributionStatistics';
import MissionNamespaceIncreaseDistributionSegment from './MissionNamespaceIncreaseDistributionSegment';
export default class MissionNamespaceIncreaseDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MissionNamespaceIncreaseDistributionStatistics | null;
    setStatistics(statistics: MissionNamespaceIncreaseDistributionStatistics | null): this;
    withStatistics(statistics: MissionNamespaceIncreaseDistributionStatistics | null): this;
    getDistribution(): MissionNamespaceIncreaseDistributionSegment[] | null;
    setDistribution(distribution: MissionNamespaceIncreaseDistributionSegment[] | null): this;
    withDistribution(distribution: MissionNamespaceIncreaseDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceIncreaseDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
