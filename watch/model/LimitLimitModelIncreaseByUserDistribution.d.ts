import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class LimitLimitModelIncreaseByUserDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.LimitLimitModelIncreaseByUserDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.LimitLimitModelIncreaseByUserDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.LimitLimitModelIncreaseByUserDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.LimitLimitModelIncreaseByUserDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.LimitLimitModelIncreaseByUserDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.LimitLimitModelIncreaseByUserDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitLimitModelIncreaseByUserDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
