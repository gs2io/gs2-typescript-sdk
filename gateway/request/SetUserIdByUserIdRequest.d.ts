import IRequest from '../../core/interface/IRequest';
export default class SetUserIdByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private allowConcurrentAccess;
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
    getAllowConcurrentAccess(): boolean | null;
    setAllowConcurrentAccess(allowConcurrentAccess: boolean | null): this;
    withAllowConcurrentAccess(allowConcurrentAccess: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetUserIdByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}