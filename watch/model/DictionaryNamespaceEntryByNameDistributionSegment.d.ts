import IModel from '../../core/interface/IModel';
export default class DictionaryNamespaceEntryByNameDistributionSegment implements IModel {
    private entryModelName;
    private count;
    getEntryModelName(): string | null;
    setEntryModelName(entryModelName: string | null): this;
    withEntryModelName(entryModelName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DictionaryNamespaceEntryByNameDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
