import IRequest from '../../core/interface/IRequest';
export default class PrepareDownloadByGenerationAndUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private dataObjectId;
    private generation;
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
    getDataObjectId(): string | null;
    setDataObjectId(dataObjectId: string | null): this;
    withDataObjectId(dataObjectId: string | null): this;
    getGeneration(): string | null;
    setGeneration(generation: string | null): this;
    withGeneration(generation: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PrepareDownloadByGenerationAndUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}