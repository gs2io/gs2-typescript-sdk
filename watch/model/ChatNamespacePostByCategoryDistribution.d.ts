import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ChatNamespacePostByCategoryDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ChatNamespacePostByCategoryDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ChatNamespacePostByCategoryDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ChatNamespacePostByCategoryDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ChatNamespacePostByCategoryDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ChatNamespacePostByCategoryDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ChatNamespacePostByCategoryDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChatNamespacePostByCategoryDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
