import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FriendNamespaceAcceptByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.FriendNamespaceAcceptByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.FriendNamespaceAcceptByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.FriendNamespaceAcceptByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.FriendNamespaceAcceptByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.FriendNamespaceAcceptByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.FriendNamespaceAcceptByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendNamespaceAcceptByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
