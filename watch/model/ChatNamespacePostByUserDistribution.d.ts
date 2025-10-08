import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ChatNamespacePostByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ChatNamespacePostByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ChatNamespacePostByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ChatNamespacePostByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ChatNamespacePostByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ChatNamespacePostByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ChatNamespacePostByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChatNamespacePostByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
