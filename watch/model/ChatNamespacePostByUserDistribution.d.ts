import IModel from '../../core/interface/IModel';
import ChatNamespacePostByUserDistributionStatistics from './ChatNamespacePostByUserDistributionStatistics';
import ChatNamespacePostByUserDistributionSegment from './ChatNamespacePostByUserDistributionSegment';
export default class ChatNamespacePostByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ChatNamespacePostByUserDistributionStatistics | null;
    setStatistics(statistics: ChatNamespacePostByUserDistributionStatistics | null): this;
    withStatistics(statistics: ChatNamespacePostByUserDistributionStatistics | null): this;
    getDistribution(): ChatNamespacePostByUserDistributionSegment[] | null;
    setDistribution(distribution: ChatNamespacePostByUserDistributionSegment[] | null): this;
    withDistribution(distribution: ChatNamespacePostByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChatNamespacePostByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
