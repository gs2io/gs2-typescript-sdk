import IRequest from '../../core/interface/IRequest';
export default class WaitCleanUserDataRequest implements IRequest {
    private requestId;
    private contextStack;
    private transactionId;
    private userId;
    private microserviceName;
    private duplicationAvoider;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getTransactionId(): string | null;
    setTransactionId(transactionId: string | null): this;
    withTransactionId(transactionId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getMicroserviceName(): string | null;
    setMicroserviceName(microserviceName: string | null): this;
    withMicroserviceName(microserviceName: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WaitCleanUserDataRequest;
    toDict(): {
        [key: string]: any;
    };
}
