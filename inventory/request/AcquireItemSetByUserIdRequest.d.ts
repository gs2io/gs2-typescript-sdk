import IRequest from '../../core/interface/IRequest';
export default class AcquireItemSetByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private inventoryName;
    private itemName;
    private userId;
    private acquireCount;
    private expiresAt;
    private createNewItemSet;
    private itemSetName;
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
    getItemName(): string | null;
    setItemName(itemName: string | null): this;
    withItemName(itemName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getAcquireCount(): number | null;
    setAcquireCount(acquireCount: number | null): this;
    withAcquireCount(acquireCount: number | null): this;
    getExpiresAt(): number | null;
    setExpiresAt(expiresAt: number | null): this;
    withExpiresAt(expiresAt: number | null): this;
    getCreateNewItemSet(): boolean | null;
    setCreateNewItemSet(createNewItemSet: boolean | null): this;
    withCreateNewItemSet(createNewItemSet: boolean | null): this;
    getItemSetName(): string | null;
    setItemSetName(itemSetName: string | null): this;
    withItemSetName(itemSetName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireItemSetByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}