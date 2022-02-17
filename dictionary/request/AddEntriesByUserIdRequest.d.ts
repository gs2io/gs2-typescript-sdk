import IRequest from '../../core/interface/IRequest';
export default class AddEntriesByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private entryModelNames;
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
    getEntryModelNames(): string[] | null;
    setEntryModelNames(entryModelNames: string[] | null): this;
    withEntryModelNames(entryModelNames: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AddEntriesByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
