import IRequest from '../../core/interface/IRequest';
export default class GetTriggerByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private triggerName;
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
    getTriggerName(): string | null;
    setTriggerName(triggerName: string | null): this;
    withTriggerName(triggerName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetTriggerByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
