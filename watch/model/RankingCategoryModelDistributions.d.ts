import IModel from '../../core/interface/IModel';
import RankingCategoryModelScoreDistribution from './RankingCategoryModelScoreDistribution';
export default class RankingCategoryModelDistributions implements IModel {
    private score;
    getScore(): RankingCategoryModelScoreDistribution | null;
    setScore(score: RankingCategoryModelScoreDistribution | null): this;
    withScore(score: RankingCategoryModelScoreDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingCategoryModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
