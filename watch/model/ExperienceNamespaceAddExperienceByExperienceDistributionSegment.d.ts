import IModel from '../../core/interface/IModel';
export default class ExperienceNamespaceAddExperienceByExperienceDistributionSegment implements IModel {
    private experienceName;
    private count;
    getExperienceName(): string | null;
    setExperienceName(experienceName: string | null): this;
    withExperienceName(experienceName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceNamespaceAddExperienceByExperienceDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
