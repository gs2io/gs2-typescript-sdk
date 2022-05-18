import IRequest from '../../core/interface/IRequest';
export default class RecordReceiptRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private contentsId;
    private receipt;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getContentsId(): string | null;
    setContentsId(contentsId: string | null): this;
    withContentsId(contentsId: string | null): this;
    getReceipt(): string | null;
    setReceipt(receipt: string | null): this;
    withReceipt(receipt: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RecordReceiptRequest;
    toDict(): {
        [key: string]: any;
    };
}
