import IRequest from '../../core/interface/IRequest';
export default class GetCategoryModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private category;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getCategory(): number | null;
    setCategory(category: number | null): this;
    withCategory(category: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCategoryModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
