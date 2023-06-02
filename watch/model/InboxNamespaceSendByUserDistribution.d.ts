import IModel from '../../core/interface/IModel';
import InboxNamespaceSendByUserDistributionStatistics from './InboxNamespaceSendByUserDistributionStatistics';
import InboxNamespaceSendByUserDistributionSegment from './InboxNamespaceSendByUserDistributionSegment';
export default class InboxNamespaceSendByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InboxNamespaceSendByUserDistributionStatistics | null;
    setStatistics(statistics: InboxNamespaceSendByUserDistributionStatistics | null): this;
    withStatistics(statistics: InboxNamespaceSendByUserDistributionStatistics | null): this;
    getDistribution(): InboxNamespaceSendByUserDistributionSegment[] | null;
    setDistribution(distribution: InboxNamespaceSendByUserDistributionSegment[] | null): this;
    withDistribution(distribution: InboxNamespaceSendByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxNamespaceSendByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
