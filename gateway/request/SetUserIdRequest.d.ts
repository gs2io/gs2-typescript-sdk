import IRequest from '../../core/interface/IRequest';
export default class SetUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private allowConcurrentAccess;
    private sessionId;
    private force;
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
    getAllowConcurrentAccess(): boolean | null;
    setAllowConcurrentAccess(allowConcurrentAccess: boolean | null): this;
    withAllowConcurrentAccess(allowConcurrentAccess: boolean | null): this;
    getSessionId(): string | null;
    setSessionId(sessionId: string | null): this;
    withSessionId(sessionId: string | null): this;
    getForce(): boolean | null;
    setForce(force: boolean | null): this;
    withForce(force: boolean | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
