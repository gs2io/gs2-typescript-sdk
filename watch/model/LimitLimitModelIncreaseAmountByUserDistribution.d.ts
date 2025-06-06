import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LimitLimitModelIncreaseAmountByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.LimitLimitModelIncreaseAmountByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.LimitLimitModelIncreaseAmountByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LimitLimitModelIncreaseAmountByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.LimitLimitModelIncreaseAmountByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.LimitLimitModelIncreaseAmountByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.LimitLimitModelIncreaseAmountByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModelIncreaseAmountByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
