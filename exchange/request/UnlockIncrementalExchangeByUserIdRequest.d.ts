import IRequest from '../../core/interface/IRequest';
export default class UnlockIncrementalExchangeByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private rateName;
    private userId;
    private lockTransactionId;
    private duplicationAvoider;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getLockTransactionId(): string | null;
    setLockTransactionId(lockTransactionId: string | null): this;
    withLockTransactionId(lockTransactionId: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnlockIncrementalExchangeByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
