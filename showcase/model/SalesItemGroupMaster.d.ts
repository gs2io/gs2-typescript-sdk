import IModel from '../../core/interface/IModel';
export default class SalesItemGroupMaster implements IModel {
    private salesItemGroupId;
    private name;
    private description;
    private metadata;
    private salesItemNames;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getSalesItemGroupName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, salesItemGroupName: string | null): string | null;
    getSalesItemGroupId(): string | null;
    setSalesItemGroupId(salesItemGroupId: string | null): this;
    withSalesItemGroupId(salesItemGroupId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getSalesItemNames(): string[] | null;
    setSalesItemNames(salesItemNames: string[] | null): this;
    withSalesItemNames(salesItemNames: string[] | null): this;
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
    }): SalesItemGroupMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
