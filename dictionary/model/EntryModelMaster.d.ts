import IModel from '../../core/interface/IModel';
export default class EntryModelMaster implements IModel {
    private entryModelId;
    private name;
    private description;
    private metadata;
    private createdAt;
    private updatedAt;
    getEntryModelId(): string | null;
    setEntryModelId(entryModelId: string | null): this;
    withEntryModelId(entryModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): EntryModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
