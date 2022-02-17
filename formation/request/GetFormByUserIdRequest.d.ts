import IRequest from '../../core/interface/IRequest';
export default class GetFormByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private moldName;
    private index;
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
    getMoldName(): string | null;
    setMoldName(moldName: string | null): this;
    withMoldName(moldName: string | null): this;
    getIndex(): number | null;
    setIndex(index: number | null): this;
    withIndex(index: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetFormByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
