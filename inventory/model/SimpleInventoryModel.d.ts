import IModel from '../../core/interface/IModel';
import SimpleItemModel from './SimpleItemModel';
export default class SimpleInventoryModel implements IModel {
    private inventoryModelId;
    private name;
    private metadata;
    private simpleItemModels;
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
    getSimpleItemModels(): SimpleItemModel[] | null;
    setSimpleItemModels(simpleItemModels: SimpleItemModel[] | null): this;
    withSimpleItemModels(simpleItemModels: SimpleItemModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SimpleInventoryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
