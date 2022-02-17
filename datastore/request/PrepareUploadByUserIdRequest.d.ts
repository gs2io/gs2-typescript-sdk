import IRequest from '../../core/interface/IRequest';
export default class PrepareUploadByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private name;
    private contentType;
    private scope;
    private allowUserIds;
    private updateIfExists;
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
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getContentType(): string | null;
    setContentType(contentType: string | null): this;
    withContentType(contentType: string | null): this;
    getScope(): string | null;
    setScope(scope: string | null): this;
    withScope(scope: string | null): this;
    getAllowUserIds(): string[] | null;
    setAllowUserIds(allowUserIds: string[] | null): this;
    withAllowUserIds(allowUserIds: string[] | null): this;
    getUpdateIfExists(): boolean | null;
    setUpdateIfExists(updateIfExists: boolean | null): this;
    withUpdateIfExists(updateIfExists: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PrepareUploadByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
