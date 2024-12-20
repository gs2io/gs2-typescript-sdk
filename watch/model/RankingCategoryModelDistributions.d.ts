import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class RankingCategoryModelDistributions implements IModel {
    private score;
    getScore(): Gs2Watch.RankingCategoryModelScoreDistribution | null;
    setScore(score: Gs2Watch.RankingCategoryModelScoreDistribution | null): this;
    withScore(score: Gs2Watch.RankingCategoryModelScoreDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingCategoryModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
