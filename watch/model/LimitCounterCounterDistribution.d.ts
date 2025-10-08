import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LimitCounterCounterDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.LimitCounterCounterDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.LimitCounterCounterDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LimitCounterCounterDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.LimitCounterCounterDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.LimitCounterCounterDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.LimitCounterCounterDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitCounterCounterDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
