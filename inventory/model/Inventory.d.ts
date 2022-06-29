import IModel from '../../core/interface/IModel';
export default class Inventory implements IModel {
    private inventoryId;
    private inventoryName;
    private userId;
    private currentInventoryCapacityUsage;
    private currentInventoryMaxCapacity;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getInventoryName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, inventoryName: string | null): string | null;
    getInventoryId(): string | null;
    setInventoryId(inventoryId: string | null): this;
    withInventoryId(inventoryId: string | null): this;
    getInventoryName(): string | null;
    setInventoryName(inventoryName: string | null): this;
    withInventoryName(inventoryName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getCurrentInventoryCapacityUsage(): number | null;
    setCurrentInventoryCapacityUsage(currentInventoryCapacityUsage: number | null): this;
    withCurrentInventoryCapacityUsage(currentInventoryCapacityUsage: number | null): this;
    getCurrentInventoryMaxCapacity(): number | null;
    setCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number | null): this;
    withCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Inventory | null;
    toDict(): {
        [key: string]: any;
    };
}
