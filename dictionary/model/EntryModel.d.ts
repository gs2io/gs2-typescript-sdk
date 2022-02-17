import IModel from '../../core/interface/IModel';
export default class EntryModel implements IModel {
    private entryModelId;
    private name;
    private metadata;
    getEntryModelId(): string | null;
    setEntryModelId(entryModelId: string | null): this;
    withEntryModelId(entryModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): EntryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
