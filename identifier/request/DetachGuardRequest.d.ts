import IRequest from '../../core/interface/IRequest';
export default class DetachGuardRequest implements IRequest {
    private requestId;
    private contextStack;
    private userName;
    private clientId;
    private guardNamespaceId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getUserName(): string | null;
    setUserName(userName: string | null): this;
    withUserName(userName: string | null): this;
    getClientId(): string | null;
    setClientId(clientId: string | null): this;
    withClientId(clientId: string | null): this;
    getGuardNamespaceId(): string | null;
    setGuardNamespaceId(guardNamespaceId: string | null): this;
    withGuardNamespaceId(guardNamespaceId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DetachGuardRequest;
    toDict(): {
        [key: string]: any;
    };
}
