import IRequest from '../../core/interface/IRequest';
export default class GetDataObjectHistoryByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private dataObjectName;
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
    getDataObjectName(): string | null;
    setDataObjectName(dataObjectName: string | null): this;
    withDataObjectName(dataObjectName: string | null): this;
    getGeneration(): string | null;
    setGeneration(generation: string | null): this;
    withGeneration(generation: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetDataObjectHistoryByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}