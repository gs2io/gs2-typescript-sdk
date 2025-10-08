import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LimitLimitModelIncreaseAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.LimitLimitModelIncreaseAmountDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.LimitLimitModelIncreaseAmountDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LimitLimitModelIncreaseAmountDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.LimitLimitModelIncreaseAmountDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.LimitLimitModelIncreaseAmountDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.LimitLimitModelIncreaseAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModelIncreaseAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
