import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MissionNamespaceIncreaseDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MissionNamespaceIncreaseDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MissionNamespaceIncreaseDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MissionNamespaceIncreaseDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MissionNamespaceIncreaseDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MissionNamespaceIncreaseDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MissionNamespaceIncreaseDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceIncreaseDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
