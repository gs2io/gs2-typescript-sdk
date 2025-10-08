import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExperienceStatusDistributions implements IModel {
    private rank;
    private rankCap;
    getRank(): Gs2Watch.ExperienceStatusRankDistribution | null;
    setRank(rank: Gs2Watch.ExperienceStatusRankDistribution | null): this;
    withRank(rank: Gs2Watch.ExperienceStatusRankDistribution | null): this;
    getRankCap(): Gs2Watch.ExperienceStatusRankCapDistribution | null;
    setRankCap(rankCap: Gs2Watch.ExperienceStatusRankCapDistribution | null): this;
    withRankCap(rankCap: Gs2Watch.ExperienceStatusRankCapDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceStatusDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
