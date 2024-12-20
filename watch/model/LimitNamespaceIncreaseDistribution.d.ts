import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LimitNamespaceIncreaseDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.LimitNamespaceIncreaseDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.LimitNamespaceIncreaseDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LimitNamespaceIncreaseDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.LimitNamespaceIncreaseDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.LimitNamespaceIncreaseDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.LimitNamespaceIncreaseDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitNamespaceIncreaseDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
