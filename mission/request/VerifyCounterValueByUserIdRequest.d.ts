import IRequest from '../../core/interface/IRequest';
export default class VerifyCounterValueByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private counterName;
    private verifyType;
    private scopeType;
    private resetType;
    private conditionName;
    private value;
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
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    getVerifyType(): string | null;
    setVerifyType(verifyType: string | null): this;
    withVerifyType(verifyType: string | null): this;
    getScopeType(): string | null;
    setScopeType(scopeType: string | null): this;
    withScopeType(scopeType: string | null): this;
    getResetType(): string | null;
    setResetType(resetType: string | null): this;
    withResetType(resetType: string | null): this;
    getConditionName(): string | null;
    setConditionName(conditionName: string | null): this;
    withConditionName(conditionName: string | null): this;
    getValue(): number | null;
    setValue(value: number | null): this;
    withValue(value: number | null): this;
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
    }): VerifyCounterValueByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
