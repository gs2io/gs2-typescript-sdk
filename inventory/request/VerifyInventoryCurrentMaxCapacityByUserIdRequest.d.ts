import IRequest from '../../core/interface/IRequest';
export default class VerifyInventoryCurrentMaxCapacityByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private inventoryName;
    private verifyType;
    private currentInventoryMaxCapacity;
    private multiplyValueSpecifyingQuantity;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getInventoryName(): string | null;
    setInventoryName(inventoryName: string | null): this;
    withInventoryName(inventoryName: string | null): this;
    getVerifyType(): string | null;
    setVerifyType(verifyType: string | null): this;
    withVerifyType(verifyType: string | null): this;
    getCurrentInventoryMaxCapacity(): number | null;
    setCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number | null): this;
    withCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number | null): this;
    getMultiplyValueSpecifyingQuantity(): boolean | null;
    setMultiplyValueSpecifyingQuantity(multiplyValueSpecifyingQuantity: boolean | null): this;
    withMultiplyValueSpecifyingQuantity(multiplyValueSpecifyingQuantity: boolean | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyInventoryCurrentMaxCapacityByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
