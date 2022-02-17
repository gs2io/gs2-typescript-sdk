import IRequest from '../../core/interface/IRequest';
export default class SetCapacityByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private inventoryName;
    private userId;
    private newCapacityValue;
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
    getNewCapacityValue(): number | null;
    setNewCapacityValue(newCapacityValue: number | null): this;
    withNewCapacityValue(newCapacityValue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetCapacityByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
