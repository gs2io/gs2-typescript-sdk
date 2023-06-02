import IModel from '../../core/interface/IModel';
import MissionNamespaceIncreaseAmountDistributionStatistics from './MissionNamespaceIncreaseAmountDistributionStatistics';
import MissionNamespaceIncreaseAmountDistributionSegment from './MissionNamespaceIncreaseAmountDistributionSegment';
export default class MissionNamespaceIncreaseAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MissionNamespaceIncreaseAmountDistributionStatistics | null;
    setStatistics(statistics: MissionNamespaceIncreaseAmountDistributionStatistics | null): this;
    withStatistics(statistics: MissionNamespaceIncreaseAmountDistributionStatistics | null): this;
    getDistribution(): MissionNamespaceIncreaseAmountDistributionSegment[] | null;
    setDistribution(distribution: MissionNamespaceIncreaseAmountDistributionSegment[] | null): this;
    withDistribution(distribution: MissionNamespaceIncreaseAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceIncreaseAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
