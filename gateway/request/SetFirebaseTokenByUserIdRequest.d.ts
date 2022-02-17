import IRequest from '../../core/interface/IRequest';
export default class SetFirebaseTokenByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private token;
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
    getToken(): string | null;
    setToken(token: string | null): this;
    withToken(token: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetFirebaseTokenByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
