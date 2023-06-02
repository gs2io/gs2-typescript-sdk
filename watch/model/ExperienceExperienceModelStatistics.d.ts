import IModel from '../../core/interface/IModel';
export default class ExperienceExperienceModelStatistics implements IModel {
    private experience;
    private experienceAmount;
    private rankCap;
    private rankCapAmount;
    getExperience(): number | null;
    setExperience(experience: number | null): this;
    withExperience(experience: number | null): this;
    getExperienceAmount(): number | null;
    setExperienceAmount(experienceAmount: number | null): this;
    withExperienceAmount(experienceAmount: number | null): this;
    getRankCap(): number | null;
    setRankCap(rankCap: number | null): this;
    withRankCap(rankCap: number | null): this;
    getRankCapAmount(): number | null;
    setRankCapAmount(rankCapAmount: number | null): this;
    withRankCapAmount(rankCapAmount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
