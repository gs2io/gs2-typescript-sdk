import IRequest from '../../core/interface/IRequest';
export default class ConsumeBigItemByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private inventoryName;
    private userId;
    private itemName;
    private consumeCount;
    private timeOffsetToken;
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
    getItemName(): string | null;
    setItemName(itemName: string | null): this;
    withItemName(itemName: string | null): this;
    getConsumeCount(): string | null;
    setConsumeCount(consumeCount: string | null): this;
    withConsumeCount(consumeCount: string | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ConsumeBigItemByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
