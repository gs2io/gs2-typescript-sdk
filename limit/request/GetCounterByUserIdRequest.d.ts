import IRequest from '../../core/interface/IRequest';
export default class GetCounterByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private limitName;
    private userId;
    private counterName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getLimitName(): string | null;
    setLimitName(limitName: string | null): this;
    withLimitName(limitName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getCounterName(): string | null;
    setCounterName(counterName: string | null): this;
    withCounterName(counterName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCounterByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
