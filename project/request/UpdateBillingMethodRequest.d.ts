import IRequest from '../../core/interface/IRequest';
export default class UpdateBillingMethodRequest implements IRequest {
    private requestId;
    private contextStack;
    private accountToken;
    private billingMethodName;
    private description;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getAccountToken(): string | null;
    setAccountToken(accountToken: string | null): this;
    withAccountToken(accountToken: string | null): this;
    getBillingMethodName(): string | null;
    setBillingMethodName(billingMethodName: string | null): this;
    withBillingMethodName(billingMethodName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateBillingMethodRequest;
    toDict(): {
        [key: string]: any;
    };
}
