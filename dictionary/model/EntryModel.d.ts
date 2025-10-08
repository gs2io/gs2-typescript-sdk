import IModel from '../../core/interface/IModel';
export default class EntryModel implements IModel {
    private entryModelId;
    private name;
    private metadata;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getEntryModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, entryModelName: string | null): string | null;
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
