import IRequest from '../../core/interface/IRequest';
export default class GetEntryByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private entryModelName;
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
    getEntryModelName(): string | null;
    setEntryModelName(entryModelName: string | null): this;
    withEntryModelName(entryModelName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEntryByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}