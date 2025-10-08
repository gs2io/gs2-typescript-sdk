import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FriendNamespaceNewFollowByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.FriendNamespaceNewFollowByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.FriendNamespaceNewFollowByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.FriendNamespaceNewFollowByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.FriendNamespaceNewFollowByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.FriendNamespaceNewFollowByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.FriendNamespaceNewFollowByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendNamespaceNewFollowByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
