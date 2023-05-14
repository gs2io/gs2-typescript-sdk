import IModel from '../../core/interface/IModel';
export default class ExperienceRankDistribution implements IModel {
    private rankValue;
    private count;
    getRankValue(): number | null;
    setRankValue(rankValue: number | null): this;
    withRankValue(rankValue: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceRankDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
