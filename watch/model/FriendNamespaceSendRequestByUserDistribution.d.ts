import IModel from '../../core/interface/IModel';
import FriendNamespaceSendRequestByUserDistributionStatistics from './FriendNamespaceSendRequestByUserDistributionStatistics';
import FriendNamespaceSendRequestByUserDistributionSegment from './FriendNamespaceSendRequestByUserDistributionSegment';
export default class FriendNamespaceSendRequestByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): FriendNamespaceSendRequestByUserDistributionStatistics | null;
    setStatistics(statistics: FriendNamespaceSendRequestByUserDistributionStatistics | null): this;
    withStatistics(statistics: FriendNamespaceSendRequestByUserDistributionStatistics | null): this;
    getDistribution(): FriendNamespaceSendRequestByUserDistributionSegment[] | null;
    setDistribution(distribution: FriendNamespaceSendRequestByUserDistributionSegment[] | null): this;
    withDistribution(distribution: FriendNamespaceSendRequestByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendNamespaceSendRequestByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
