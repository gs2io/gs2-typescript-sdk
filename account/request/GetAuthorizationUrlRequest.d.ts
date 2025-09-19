import IRequest from '../../core/interface/IRequest';
export default class GetAuthorizationUrlRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private type;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getType(): number | null;
    setType(type: number | null): this;
    withType(type: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetAuthorizationUrlRequest;
    toDict(): {
        [key: string]: any;
    };
}
