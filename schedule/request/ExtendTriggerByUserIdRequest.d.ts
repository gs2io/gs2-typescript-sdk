import IRequest from '../../core/interface/IRequest';
export default class ExtendTriggerByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private triggerName;
    private userId;
    private extendSeconds;
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
    getTriggerName(): string | null;
    setTriggerName(triggerName: string | null): this;
    withTriggerName(triggerName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getExtendSeconds(): number | null;
    setExtendSeconds(extendSeconds: number | null): this;
    withExtendSeconds(extendSeconds: number | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExtendTriggerByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
