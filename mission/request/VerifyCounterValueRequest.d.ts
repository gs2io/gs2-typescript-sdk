import IRequest from '../../core/interface/IRequest';
export default class VerifyCounterValueRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private counterName;
    private verifyType;
    private resetType;
    private value;
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
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    getVerifyType(): string | null;
    setVerifyType(verifyType: string | null): this;
    withVerifyType(verifyType: string | null): this;
    getResetType(): string | null;
    setResetType(resetType: string | null): this;
    withResetType(resetType: string | null): this;
    getValue(): number | null;
    setValue(value: number | null): this;
    withValue(value: number | null): this;
    getMultiplyValueSpecifyingQuantity(): boolean | null;
    setMultiplyValueSpecifyingQuantity(multiplyValueSpecifyingQuantity: boolean | null): this;
    withMultiplyValueSpecifyingQuantity(multiplyValueSpecifyingQuantity: boolean | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyCounterValueRequest;
    toDict(): {
        [key: string]: any;
    };
}
