import IModel from '../../core/interface/IModel';
import ExperienceStatusRankDistribution from './ExperienceStatusRankDistribution';
import ExperienceStatusRankCapDistribution from './ExperienceStatusRankCapDistribution';
export default class ExperienceStatusDistributions implements IModel {
    private rank;
    private rankCap;
    getRank(): ExperienceStatusRankDistribution | null;
    setRank(rank: ExperienceStatusRankDistribution | null): this;
    withRank(rank: ExperienceStatusRankDistribution | null): this;
    getRankCap(): ExperienceStatusRankCapDistribution | null;
    setRankCap(rankCap: ExperienceStatusRankCapDistribution | null): this;
    withRankCap(rankCap: ExperienceStatusRankCapDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceStatusDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
