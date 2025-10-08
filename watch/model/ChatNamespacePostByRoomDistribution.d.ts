import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ChatNamespacePostByRoomDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.ChatNamespacePostByRoomDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.ChatNamespacePostByRoomDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.ChatNamespacePostByRoomDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.ChatNamespacePostByRoomDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.ChatNamespacePostByRoomDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.ChatNamespacePostByRoomDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChatNamespacePostByRoomDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
