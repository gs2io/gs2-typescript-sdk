import IModel from '../../core/interface/IModel';
export default class InventoryModel implements IModel {
    private inventoryModelId;
    private name;
    private metadata;
    private initialCapacity;
    private maxCapacity;
    private protectReferencedItem;
    getInventoryModelId(): string | null;
    setInventoryModelId(inventoryModelId: string | null): this;
    withInventoryModelId(inventoryModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getInitialCapacity(): number | null;
    setInitialCapacity(initialCapacity: number | null): this;
    withInitialCapacity(initialCapacity: number | null): this;
    getMaxCapacity(): number | null;
    setMaxCapacity(maxCapacity: number | null): this;
    withMaxCapacity(maxCapacity: number | null): this;
    getProtectReferencedItem(): boolean | null;
    setProtectReferencedItem(protectReferencedItem: boolean | null): this;
    withProtectReferencedItem(protectReferencedItem: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
