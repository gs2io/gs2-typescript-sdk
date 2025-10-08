import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InboxNamespaceReadElapsedMinutesDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InboxNamespaceReadElapsedMinutesDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InboxNamespaceReadElapsedMinutesDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InboxNamespaceReadElapsedMinutesDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InboxNamespaceReadElapsedMinutesDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InboxNamespaceReadElapsedMinutesDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InboxNamespaceReadElapsedMinutesDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxNamespaceReadElapsedMinutesDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
