import IRequest from '../../core/interface/IRequest';
export default class LockRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private propertyId;
    private accessToken;
    private transactionId;
    private ttl;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getTtl(): number | null;
    setTtl(ttl: number | null): this;
    withTtl(ttl: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LockRequest;
    toDict(): {
        [key: string]: any;
    };
}
