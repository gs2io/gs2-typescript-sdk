import IModel from '../../core/interface/IModel';
import ItemModel from './ItemModel';
export default class InventoryModel implements IModel {
    private inventoryModelId;
    private name;
    private metadata;
    private initialCapacity;
    private maxCapacity;
    private protectReferencedItem;
    private itemModels;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getInventoryName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, inventoryName: string | null): string | null;
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
    getItemModels(): ItemModel[] | null;
    setItemModels(itemModels: ItemModel[] | null): this;
    withItemModels(itemModels: ItemModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
