import IModel from '../../core/interface/IModel';
import RankingCategoryScoreDistribution from './RankingCategoryScoreDistribution';
export default class RankingCategory implements IModel {
    private name;
    private scoreDistribution;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getScoreDistribution(): RankingCategoryScoreDistribution[] | null;
    setScoreDistribution(scoreDistribution: RankingCategoryScoreDistribution[] | null): this;
    withScoreDistribution(scoreDistribution: RankingCategoryScoreDistribution[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RankingCategory | null;
    toDict(): {
        [key: string]: any;
    };
}
