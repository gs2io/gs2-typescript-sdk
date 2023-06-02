import IModel from '../../core/interface/IModel';
import ChatNamespacePostByRoomDistributionStatistics from './ChatNamespacePostByRoomDistributionStatistics';
import ChatNamespacePostByRoomDistributionSegment from './ChatNamespacePostByRoomDistributionSegment';
export default class ChatNamespacePostByRoomDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ChatNamespacePostByRoomDistributionStatistics | null;
    setStatistics(statistics: ChatNamespacePostByRoomDistributionStatistics | null): this;
    withStatistics(statistics: ChatNamespacePostByRoomDistributionStatistics | null): this;
    getDistribution(): ChatNamespacePostByRoomDistributionSegment[] | null;
    setDistribution(distribution: ChatNamespacePostByRoomDistributionSegment[] | null): this;
    withDistribution(distribution: ChatNamespacePostByRoomDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChatNamespacePostByRoomDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
