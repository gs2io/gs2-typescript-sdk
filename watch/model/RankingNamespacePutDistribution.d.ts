import IModel from '../../core/interface/IModel';
import RankingNamespacePutDistributionStatistics from './RankingNamespacePutDistributionStatistics';
import RankingNamespacePutDistributionSegment from './RankingNamespacePutDistributionSegment';
export default class RankingNamespacePutDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): RankingNamespacePutDistributionStatistics | null;
    setStatistics(statistics: RankingNamespacePutDistributionStatistics | null): this;
    withStatistics(statistics: RankingNamespacePutDistributionStatistics | null): this;
    getDistribution(): RankingNamespacePutDistributionSegment[] | null;
    setDistribution(distribution: RankingNamespacePutDistributionSegment[] | null): this;
    withDistribution(distribution: RankingNamespacePutDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingNamespacePutDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
