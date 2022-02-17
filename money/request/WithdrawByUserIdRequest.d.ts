import IRequest from '../../core/interface/IRequest';
export default class WithdrawByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private slot;
    private count;
    private paidOnly;
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
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    getPaidOnly(): boolean | null;
    setPaidOnly(paidOnly: boolean | null): this;
    withPaidOnly(paidOnly: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WithdrawByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
