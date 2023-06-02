import IModel from '../../core/interface/IModel';
import RankingCategoryModelScoreDistributionStatistics from './RankingCategoryModelScoreDistributionStatistics';
import RankingCategoryModelScoreDistributionSegment from './RankingCategoryModelScoreDistributionSegment';
export default class RankingCategoryModelScoreDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): RankingCategoryModelScoreDistributionStatistics | null;
    setStatistics(statistics: RankingCategoryModelScoreDistributionStatistics | null): this;
    withStatistics(statistics: RankingCategoryModelScoreDistributionStatistics | null): this;
    getDistribution(): RankingCategoryModelScoreDistributionSegment[] | null;
    setDistribution(distribution: RankingCategoryModelScoreDistributionSegment[] | null): this;
    withDistribution(distribution: RankingCategoryModelScoreDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingCategoryModelScoreDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
