import IModel from '../../core/interface/IModel';
export default class DistributorModelMaster implements IModel {
    private distributorModelId;
    private name;
    private description;
    private metadata;
    private inboxNamespaceId;
    private whiteListTargetIds;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getDistributorName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, distributorName: string | null): string | null;
    getDistributorModelId(): string | null;
    setDistributorModelId(distributorModelId: string | null): this;
    withDistributorModelId(distributorModelId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getInboxNamespaceId(): string | null;
    setInboxNamespaceId(inboxNamespaceId: string | null): this;
    withInboxNamespaceId(inboxNamespaceId: string | null): this;
    getWhiteListTargetIds(): string[] | null;
    setWhiteListTargetIds(whiteListTargetIds: string[] | null): this;
    withWhiteListTargetIds(whiteListTargetIds: string[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DistributorModelMaster | null;
    toDict(): {
        [key: string]: any;
    };
}