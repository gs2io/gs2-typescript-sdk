import IRequest from '../../core/interface/IRequest';
export default class AddCapacityByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private inventoryName;
    private userId;
    private addCapacityValue;
    private duplicationAvoider;
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
    getAddCapacityValue(): number | null;
    setAddCapacityValue(addCapacityValue: number | null): this;
    withAddCapacityValue(addCapacityValue: number | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AddCapacityByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
