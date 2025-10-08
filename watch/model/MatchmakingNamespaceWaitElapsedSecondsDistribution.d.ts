import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class MatchmakingNamespaceWaitElapsedSecondsDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.MatchmakingNamespaceWaitElapsedSecondsDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingNamespaceWaitElapsedSecondsDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
