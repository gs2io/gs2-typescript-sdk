import IModel from '../../core/interface/IModel';
export default class ExperienceExperienceModelAddRankCapByUserDistributionSegment implements IModel {
    private min;
    private max;
    private count;
    getMin(): number | null;
    setMin(min: number | null): this;
    withMin(min: number | null): this;
    getMax(): number | null;
    setMax(max: number | null): this;
    withMax(max: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelAddRankCapByUserDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
