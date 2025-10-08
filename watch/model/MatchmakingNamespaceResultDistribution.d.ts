import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MatchmakingNamespaceResultDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MatchmakingNamespaceResultDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MatchmakingNamespaceResultDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MatchmakingNamespaceResultDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MatchmakingNamespaceResultDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MatchmakingNamespaceResultDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MatchmakingNamespaceResultDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingNamespaceResultDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
