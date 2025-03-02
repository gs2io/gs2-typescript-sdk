import IRequest from '../../core/interface/IRequest';
export default class TriggerByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private triggerName;
    private userId;
    private triggerStrategy;
    private ttl;
    private eventId;
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
    getTriggerStrategy(): string | null;
    setTriggerStrategy(triggerStrategy: string | null): this;
    withTriggerStrategy(triggerStrategy: string | null): this;
    getTtl(): number | null;
    setTtl(ttl: number | null): this;
    withTtl(ttl: number | null): this;
    getEventId(): string | null;
    setEventId(eventId: string | null): this;
    withEventId(eventId: string | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TriggerByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
