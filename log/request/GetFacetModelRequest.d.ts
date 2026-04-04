import IRequest from '../../core/interface/IRequest';
export default class GetFacetModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private field;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getField(): string | null;
    setField(field: string | null): this;
    withField(field: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetFacetModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
