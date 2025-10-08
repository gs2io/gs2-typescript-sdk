import IRequest from '../../core/interface/IRequest';
export default class GetKeyRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private keyName;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getKeyName(): string | null;
    setKeyName(keyName: string | null): this;
    withKeyName(keyName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetKeyRequest;
    toDict(): {
        [key: string]: any;
    };
}
