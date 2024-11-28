import IRequest from '../../core/interface/IRequest';
export default class RunTransactionRequest implements IRequest {
    private requestId;
    private contextStack;
    private ownerId;
    private namespaceName;
    private userId;
    private transaction;
    private timeOffsetToken;
    private duplicationAvoider;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getOwnerId(): string | null;
    setOwnerId(ownerId: string | null): this;
    withOwnerId(ownerId: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTransaction(): string | null;
    setTransaction(transaction: string | null): this;
    withTransaction(transaction: string | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RunTransactionRequest;
    toDict(): {
        [key: string]: any;
    };
}
