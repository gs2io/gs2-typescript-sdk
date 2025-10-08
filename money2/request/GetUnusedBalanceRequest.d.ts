import IRequest from '../../core/interface/IRequest';
export default class GetUnusedBalanceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private currency;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getCurrency(): string | null;
    setCurrency(currency: string | null): this;
    withCurrency(currency: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetUnusedBalanceRequest;
    toDict(): {
        [key: string]: any;
    };
}
