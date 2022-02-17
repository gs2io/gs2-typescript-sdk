import IRequest from '../../core/interface/IRequest';
export default class DecryptRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private keyName;
    private data;
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
    getData(): string | null;
    setData(data: string | null): this;
    withData(data: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DecryptRequest;
    toDict(): {
        [key: string]: any;
    };
}
