import IModel from '../../core/interface/IModel';
export default class ExperienceNamespaceStatistics implements IModel {
    private experience;
    private rankCap;
    getExperience(): number | null;
    setExperience(experience: number | null): this;
    withExperience(experience: number | null): this;
    getRankCap(): number | null;
    setRankCap(rankCap: number | null): this;
    withRankCap(rankCap: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
