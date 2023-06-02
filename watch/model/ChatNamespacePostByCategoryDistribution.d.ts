import IModel from '../../core/interface/IModel';
import ChatNamespacePostByCategoryDistributionStatistics from './ChatNamespacePostByCategoryDistributionStatistics';
import ChatNamespacePostByCategoryDistributionSegment from './ChatNamespacePostByCategoryDistributionSegment';
export default class ChatNamespacePostByCategoryDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): ChatNamespacePostByCategoryDistributionStatistics | null;
    setStatistics(statistics: ChatNamespacePostByCategoryDistributionStatistics | null): this;
    withStatistics(statistics: ChatNamespacePostByCategoryDistributionStatistics | null): this;
    getDistribution(): ChatNamespacePostByCategoryDistributionSegment[] | null;
    setDistribution(distribution: ChatNamespacePostByCategoryDistributionSegment[] | null): this;
    withDistribution(distribution: ChatNamespacePostByCategoryDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChatNamespacePostByCategoryDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
