import IRequest from '../../core/interface/IRequest';
export default class GetAccountRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private includeLastAuthenticatedAt;
    private timeOffsetToken;
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
    getIncludeLastAuthenticatedAt(): boolean | null;
    setIncludeLastAuthenticatedAt(includeLastAuthenticatedAt: boolean | null): this;
    withIncludeLastAuthenticatedAt(includeLastAuthenticatedAt: boolean | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetAccountRequest;
    toDict(): {
        [key: string]: any;
    };
}
