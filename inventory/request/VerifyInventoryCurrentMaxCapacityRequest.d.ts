import IRequest from '../../core/interface/IRequest';
export default class VerifyInventoryCurrentMaxCapacityRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private inventoryName;
    private verifyType;
    private currentInventoryMaxCapacity;
    private multiplyValueSpecifyingQuantity;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
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
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyInventoryCurrentMaxCapacityRequest;
    toDict(): {
        [key: string]: any;
    };
}
