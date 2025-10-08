import IRequest from '../../core/interface/IRequest';
export default class CreateMatchSessionRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private sessionName;
    private ttlSeconds;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getSessionName(): string | null;
    setSessionName(sessionName: string | null): this;
    withSessionName(sessionName: string | null): this;
    getTtlSeconds(): number | null;
    setTtlSeconds(ttlSeconds: number | null): this;
    withTtlSeconds(ttlSeconds: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateMatchSessionRequest;
    toDict(): {
        [key: string]: any;
    };
}
