import IModel from '../../core/interface/IModel';
import MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics from './MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics';
import MatchmakingNamespaceWaitElapsedSecondsDistributionSegment from './MatchmakingNamespaceWaitElapsedSecondsDistributionSegment';
export default class MatchmakingNamespaceWaitElapsedSecondsDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics | null;
    setStatistics(statistics: MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics | null): this;
    withStatistics(statistics: MatchmakingNamespaceWaitElapsedSecondsDistributionStatistics | null): this;
    getDistribution(): MatchmakingNamespaceWaitElapsedSecondsDistributionSegment[] | null;
    setDistribution(distribution: MatchmakingNamespaceWaitElapsedSecondsDistributionSegment[] | null): this;
    withDistribution(distribution: MatchmakingNamespaceWaitElapsedSecondsDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingNamespaceWaitElapsedSecondsDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
