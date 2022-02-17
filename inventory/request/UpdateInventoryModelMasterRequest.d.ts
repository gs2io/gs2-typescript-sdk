import IRequest from '../../core/interface/IRequest';
export default class UpdateInventoryModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private inventoryName;
    private description;
    private metadata;
    private initialCapacity;
    private maxCapacity;
    private protectReferencedItem;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getInventoryName(): string | null;
    setInventoryName(inventoryName: string | null): this;
    withInventoryName(inventoryName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
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
    }): UpdateInventoryModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
