import IModel from '../../core/interface/IModel';
export default class FormationMoldUpdateByIndexDistributionSegment implements IModel {
    private index;
    private count;
    getIndex(): number | null;
    setIndex(index: number | null): this;
    withIndex(index: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationMoldUpdateByIndexDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
