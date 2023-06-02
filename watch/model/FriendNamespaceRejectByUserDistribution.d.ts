import IModel from '../../core/interface/IModel';
import FriendNamespaceRejectByUserDistributionStatistics from './FriendNamespaceRejectByUserDistributionStatistics';
import FriendNamespaceRejectByUserDistributionSegment from './FriendNamespaceRejectByUserDistributionSegment';
export default class FriendNamespaceRejectByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): FriendNamespaceRejectByUserDistributionStatistics | null;
    setStatistics(statistics: FriendNamespaceRejectByUserDistributionStatistics | null): this;
    withStatistics(statistics: FriendNamespaceRejectByUserDistributionStatistics | null): this;
    getDistribution(): FriendNamespaceRejectByUserDistributionSegment[] | null;
    setDistribution(distribution: FriendNamespaceRejectByUserDistributionSegment[] | null): this;
    withDistribution(distribution: FriendNamespaceRejectByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendNamespaceRejectByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
