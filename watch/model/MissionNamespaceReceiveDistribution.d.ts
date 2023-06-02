import IModel from '../../core/interface/IModel';
import MissionNamespaceReceiveDistributionStatistics from './MissionNamespaceReceiveDistributionStatistics';
import MissionNamespaceReceiveDistributionSegment from './MissionNamespaceReceiveDistributionSegment';
export default class MissionNamespaceReceiveDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MissionNamespaceReceiveDistributionStatistics | null;
    setStatistics(statistics: MissionNamespaceReceiveDistributionStatistics | null): this;
    withStatistics(statistics: MissionNamespaceReceiveDistributionStatistics | null): this;
    getDistribution(): MissionNamespaceReceiveDistributionSegment[] | null;
    setDistribution(distribution: MissionNamespaceReceiveDistributionSegment[] | null): this;
    withDistribution(distribution: MissionNamespaceReceiveDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceReceiveDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
