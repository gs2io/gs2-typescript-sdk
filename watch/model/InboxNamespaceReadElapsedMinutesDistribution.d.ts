import IModel from '../../core/interface/IModel';
import InboxNamespaceReadElapsedMinutesDistributionStatistics from './InboxNamespaceReadElapsedMinutesDistributionStatistics';
import InboxNamespaceReadElapsedMinutesDistributionSegment from './InboxNamespaceReadElapsedMinutesDistributionSegment';
export default class InboxNamespaceReadElapsedMinutesDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InboxNamespaceReadElapsedMinutesDistributionStatistics | null;
    setStatistics(statistics: InboxNamespaceReadElapsedMinutesDistributionStatistics | null): this;
    withStatistics(statistics: InboxNamespaceReadElapsedMinutesDistributionStatistics | null): this;
    getDistribution(): InboxNamespaceReadElapsedMinutesDistributionSegment[] | null;
    setDistribution(distribution: InboxNamespaceReadElapsedMinutesDistributionSegment[] | null): this;
    withDistribution(distribution: InboxNamespaceReadElapsedMinutesDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxNamespaceReadElapsedMinutesDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
