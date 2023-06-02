import IModel from '../../core/interface/IModel';
export default class FormationNamespaceUpdateByMoldDistributionSegment implements IModel {
    private moldName;
    private count;
    getMoldName(): string | null;
    setMoldName(moldName: string | null): this;
    withMoldName(moldName: string | null): this;
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
