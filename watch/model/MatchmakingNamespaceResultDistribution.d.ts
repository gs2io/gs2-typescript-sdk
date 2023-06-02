import IModel from '../../core/interface/IModel';
import MatchmakingNamespaceResultDistributionStatistics from './MatchmakingNamespaceResultDistributionStatistics';
import MatchmakingNamespaceResultDistributionSegment from './MatchmakingNamespaceResultDistributionSegment';
export default class MatchmakingNamespaceResultDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): MatchmakingNamespaceResultDistributionStatistics | null;
    setStatistics(statistics: MatchmakingNamespaceResultDistributionStatistics | null): this;
    withStatistics(statistics: MatchmakingNamespaceResultDistributionStatistics | null): this;
    getDistribution(): MatchmakingNamespaceResultDistributionSegment[] | null;
    setDistribution(distribution: MatchmakingNamespaceResultDistributionSegment[] | null): this;
    withDistribution(distribution: MatchmakingNamespaceResultDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MatchmakingNamespaceResultDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
