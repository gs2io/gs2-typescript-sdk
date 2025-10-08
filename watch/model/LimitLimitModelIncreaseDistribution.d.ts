import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LimitLimitModelIncreaseDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.LimitLimitModelIncreaseDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.LimitLimitModelIncreaseDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LimitLimitModelIncreaseDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.LimitLimitModelIncreaseDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.LimitLimitModelIncreaseDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.LimitLimitModelIncreaseDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModelIncreaseDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
