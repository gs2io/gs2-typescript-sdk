import IRequest from '../../core/interface/IRequest';
export default class MarkReceivedRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private bonusModelName;
    private accessToken;
    private stepNumber;
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
    getBonusModelName(): string | null;
    setBonusModelName(bonusModelName: string | null): this;
    withBonusModelName(bonusModelName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getStepNumber(): number | null;
    setStepNumber(stepNumber: number | null): this;
    withStepNumber(stepNumber: number | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MarkReceivedRequest;
    toDict(): {
        [key: string]: any;
    };
}
