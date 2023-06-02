import IModel from '../../core/interface/IModel';
import LimitNamespaceIncreaseDistributionStatistics from './LimitNamespaceIncreaseDistributionStatistics';
import LimitNamespaceIncreaseDistributionSegment from './LimitNamespaceIncreaseDistributionSegment';
export default class LimitNamespaceIncreaseDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): LimitNamespaceIncreaseDistributionStatistics | null;
    setStatistics(statistics: LimitNamespaceIncreaseDistributionStatistics | null): this;
    withStatistics(statistics: LimitNamespaceIncreaseDistributionStatistics | null): this;
    getDistribution(): LimitNamespaceIncreaseDistributionSegment[] | null;
    setDistribution(distribution: LimitNamespaceIncreaseDistributionSegment[] | null): this;
    withDistribution(distribution: LimitNamespaceIncreaseDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitNamespaceIncreaseDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
