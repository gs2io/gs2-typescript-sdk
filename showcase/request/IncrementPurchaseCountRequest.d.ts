import IRequest from '../../core/interface/IRequest';
export default class IncrementPurchaseCountRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private showcaseName;
    private displayItemName;
    private accessToken;
    private count;
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
    getShowcaseName(): string | null;
    setShowcaseName(showcaseName: string | null): this;
    withShowcaseName(showcaseName: string | null): this;
    getDisplayItemName(): string | null;
    setDisplayItemName(displayItemName: string | null): this;
    withDisplayItemName(displayItemName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IncrementPurchaseCountRequest;
    toDict(): {
        [key: string]: any;
    };
}