import IRequest from '../../core/interface/IRequest';
export default class AddReferenceOfByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private inventoryName;
    private userId;
    private itemName;
    private itemSetName;
    private referenceOf;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getItemName(): string | null;
    setItemName(itemName: string | null): this;
    withItemName(itemName: string | null): this;
    getItemSetName(): string | null;
    setItemSetName(itemSetName: string | null): this;
    withItemSetName(itemSetName: string | null): this;
    getReferenceOf(): string | null;
    setReferenceOf(referenceOf: string | null): this;
    withReferenceOf(referenceOf: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AddReferenceOfByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
