import IModel from '../../core/interface/IModel';
import FriendNamespaceAcceptByUserDistributionStatistics from './FriendNamespaceAcceptByUserDistributionStatistics';
import FriendNamespaceAcceptByUserDistributionSegment from './FriendNamespaceAcceptByUserDistributionSegment';
export default class FriendNamespaceAcceptByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): FriendNamespaceAcceptByUserDistributionStatistics | null;
    setStatistics(statistics: FriendNamespaceAcceptByUserDistributionStatistics | null): this;
    withStatistics(statistics: FriendNamespaceAcceptByUserDistributionStatistics | null): this;
    getDistribution(): FriendNamespaceAcceptByUserDistributionSegment[] | null;
    setDistribution(distribution: FriendNamespaceAcceptByUserDistributionSegment[] | null): this;
    withDistribution(distribution: FriendNamespaceAcceptByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendNamespaceAcceptByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
