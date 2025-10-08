import IRequest from '../../core/interface/IRequest';
export default class WithdrawRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private slot;
    private withdrawCount;
    private paidOnly;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getWithdrawCount(): number | null;
    setWithdrawCount(withdrawCount: number | null): this;
    withWithdrawCount(withdrawCount: number | null): this;
    getPaidOnly(): boolean | null;
    setPaidOnly(paidOnly: boolean | null): this;
    withPaidOnly(paidOnly: boolean | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WithdrawRequest;
    toDict(): {
        [key: string]: any;
    };
}
