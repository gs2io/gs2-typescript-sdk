import IModel from '../../core/interface/IModel';
export default class BigItemModel implements IModel {
    private itemModelId;
    private name;
    private metadata;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getInventoryName(grn: string): string | null;
    static getItemName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, inventoryName: string | null, itemName: string | null): string | null;
    getItemModelId(): string | null;
    setItemModelId(itemModelId: string | null): this;
    withItemModelId(itemModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BigItemModel | null;
    toDict(): {
        [key: string]: any;
    };
}
