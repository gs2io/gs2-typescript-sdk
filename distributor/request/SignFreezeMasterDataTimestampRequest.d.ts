import IRequest from '../../core/interface/IRequest';
export default class SignFreezeMasterDataTimestampRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private timestamp;
    private keyId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getTimestamp(): number | null;
    setTimestamp(timestamp: number | null): this;
    withTimestamp(timestamp: number | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SignFreezeMasterDataTimestampRequest;
    toDict(): {
        [key: string]: any;
    };
}
