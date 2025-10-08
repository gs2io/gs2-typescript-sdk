import IModel from '../../core/interface/IModel';
import * as Gs2Inventory from '../../inventory/model';
export default class BigInventoryModel implements IModel {
    private inventoryModelId;
    private name;
    private metadata;
    private bigItemModels;
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
    getBigItemModels(): Gs2Inventory.BigItemModel[] | null;
    setBigItemModels(bigItemModels: Gs2Inventory.BigItemModel[] | null): this;
    withBigItemModels(bigItemModels: Gs2Inventory.BigItemModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BigInventoryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
