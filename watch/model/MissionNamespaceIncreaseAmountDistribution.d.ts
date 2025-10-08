import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MissionNamespaceIncreaseAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MissionNamespaceIncreaseAmountDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MissionNamespaceIncreaseAmountDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MissionNamespaceIncreaseAmountDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MissionNamespaceIncreaseAmountDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MissionNamespaceIncreaseAmountDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MissionNamespaceIncreaseAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceIncreaseAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
