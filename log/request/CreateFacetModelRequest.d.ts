import IRequest from '../../core/interface/IRequest';
export default class CreateFacetModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private field;
    private type;
    private displayName;
    private order;
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
    getType(): string | null;
    setType(type: string | null): this;
    withType(type: string | null): this;
    getDisplayName(): string | null;
    setDisplayName(displayName: string | null): this;
    withDisplayName(displayName: string | null): this;
    getOrder(): number | null;
    setOrder(order: number | null): this;
    withOrder(order: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateFacetModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
