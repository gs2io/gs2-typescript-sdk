import IRequest from '../../core/interface/IRequest';
export default class GetEventByTransactionIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private transactionId;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEventByTransactionIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
