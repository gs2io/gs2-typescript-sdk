import IModel from '../../core/interface/IModel';
export default class FormationNamespaceUpdateByMoldDistributionSegment implements IModel {
    private moldModelName;
    private count;
    getMoldModelName(): string | null;
    setMoldModelName(moldModelName: string | null): this;
    withMoldModelName(moldModelName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationNamespaceUpdateByMoldDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
