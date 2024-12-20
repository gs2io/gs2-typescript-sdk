import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InboxNamespaceSendByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InboxNamespaceSendByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InboxNamespaceSendByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InboxNamespaceSendByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InboxNamespaceSendByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InboxNamespaceSendByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InboxNamespaceSendByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxNamespaceSendByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
