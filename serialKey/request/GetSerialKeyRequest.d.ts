import IRequest from '../../core/interface/IRequest';
export default class GetSerialKeyRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private code;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getCode(): string | null;
    setCode(code: string | null): this;
    withCode(code: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetSerialKeyRequest;
    toDict(): {
        [key: string]: any;
    };
}
