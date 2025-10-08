import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class RankingNamespacePutDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.RankingNamespacePutDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.RankingNamespacePutDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.RankingNamespacePutDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.RankingNamespacePutDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.RankingNamespacePutDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.RankingNamespacePutDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingNamespacePutDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
