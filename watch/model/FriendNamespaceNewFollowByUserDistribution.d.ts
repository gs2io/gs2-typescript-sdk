import IModel from '../../core/interface/IModel';
import FriendNamespaceNewFollowByUserDistributionStatistics from './FriendNamespaceNewFollowByUserDistributionStatistics';
import FriendNamespaceNewFollowByUserDistributionSegment from './FriendNamespaceNewFollowByUserDistributionSegment';
export default class FriendNamespaceNewFollowByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): FriendNamespaceNewFollowByUserDistributionStatistics | null;
    setStatistics(statistics: FriendNamespaceNewFollowByUserDistributionStatistics | null): this;
    withStatistics(statistics: FriendNamespaceNewFollowByUserDistributionStatistics | null): this;
    getDistribution(): FriendNamespaceNewFollowByUserDistributionSegment[] | null;
    setDistribution(distribution: FriendNamespaceNewFollowByUserDistributionSegment[] | null): this;
    withDistribution(distribution: FriendNamespaceNewFollowByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendNamespaceNewFollowByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
