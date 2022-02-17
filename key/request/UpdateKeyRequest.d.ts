import IRequest from '../../core/interface/IRequest';
export default class UpdateKeyRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private keyName;
    private description;
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
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateKeyRequest;
    toDict(): {
        [key: string]: any;
    };
}
