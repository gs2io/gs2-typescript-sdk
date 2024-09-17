import IRequest from '../../core/interface/IRequest';
export default class VerifyTriggerRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private triggerName;
    private verifyType;
    private elapsedMinutes;
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
    getTriggerName(): string | null;
    setTriggerName(triggerName: string | null): this;
    withTriggerName(triggerName: string | null): this;
    getVerifyType(): string | null;
    setVerifyType(verifyType: string | null): this;
    withVerifyType(verifyType: string | null): this;
    getElapsedMinutes(): number | null;
    setElapsedMinutes(elapsedMinutes: number | null): this;
    withElapsedMinutes(elapsedMinutes: number | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyTriggerRequest;
    toDict(): {
        [key: string]: any;
    };
}
