import IModel from '../../core/interface/IModel';
export default class ItemModelMaster implements IModel {
    private itemModelId;
    private inventoryName;
    private name;
    private description;
    private metadata;
    private stackingLimit;
    private allowMultipleStacks;
    private sortValue;
    private createdAt;
    private updatedAt;
    getItemModelId(): string | null;
    setItemModelId(itemModelId: string | null): this;
    withItemModelId(itemModelId: string | null): this;
    getInventoryName(): string | null;
    setInventoryName(inventoryName: string | null): this;
    withInventoryName(inventoryName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getStackingLimit(): number | null;
    setStackingLimit(stackingLimit: number | null): this;
    withStackingLimit(stackingLimit: number | null): this;
    getAllowMultipleStacks(): boolean | null;
    setAllowMultipleStacks(allowMultipleStacks: boolean | null): this;
    withAllowMultipleStacks(allowMultipleStacks: boolean | null): this;
    getSortValue(): number | null;
    setSortValue(sortValue: number | null): this;
    withSortValue(sortValue: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ItemModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
