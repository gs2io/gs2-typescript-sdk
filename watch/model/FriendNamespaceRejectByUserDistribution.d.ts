import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FriendNamespaceRejectByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.FriendNamespaceRejectByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.FriendNamespaceRejectByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.FriendNamespaceRejectByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.FriendNamespaceRejectByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.FriendNamespaceRejectByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.FriendNamespaceRejectByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendNamespaceRejectByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
