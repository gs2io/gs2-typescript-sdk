import IRequest from '../../core/interface/IRequest';
export default class DeleteMatchSessionRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private sessionName;
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
    static fromDict(data: {
        [key: string]: any;
    }): DeleteMatchSessionRequest;
    toDict(): {
        [key: string]: any;
    };
}
