import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MissionNamespaceReceiveDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MissionNamespaceReceiveDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MissionNamespaceReceiveDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MissionNamespaceReceiveDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MissionNamespaceReceiveDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MissionNamespaceReceiveDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MissionNamespaceReceiveDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionNamespaceReceiveDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
