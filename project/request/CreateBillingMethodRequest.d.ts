import IRequest from '@/gs2/core/interface/IRequest';
export declare class CreateBillingMethodRequest implements IRequest {
    private requestId;
    private contextStack;
    private accountToken;
    private description;
    private methodType;
    private cardCustomerId;
    private partnerId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getAccountToken(): string | null;
    setAccountToken(accountToken: string | null): this;
    withAccountToken(accountToken: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMethodType(): string | null;
    setMethodType(methodType: string | null): this;
    withMethodType(methodType: string | null): this;
    getCardCustomerId(): string | null;
    setCardCustomerId(cardCustomerId: string | null): this;
    withCardCustomerId(cardCustomerId: string | null): this;
    getPartnerId(): string | null;
    setPartnerId(partnerId: string | null): this;
    withPartnerId(partnerId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateBillingMethodRequest;
    toDict(): {
        [key: string]: any;
    };
}
