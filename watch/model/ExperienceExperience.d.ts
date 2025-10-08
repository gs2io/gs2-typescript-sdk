import IModel from '../../core/interface/IModel';
import ExperienceRankDistribution from './ExperienceRankDistribution';
export default class ExperienceExperience implements IModel {
    private experienceName;
    private rankDistribution;
    getExperienceName(): string | null;
    setExperienceName(experienceName: string | null): this;
    withExperienceName(experienceName: string | null): this;
    getRankDistribution(): ExperienceRankDistribution[] | null;
    setRankDistribution(rankDistribution: ExperienceRankDistribution[] | null): this;
    withRankDistribution(rankDistribution: ExperienceRankDistribution[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperience | null;
    toDict(): {
        [key: string]: any;
    };
}
