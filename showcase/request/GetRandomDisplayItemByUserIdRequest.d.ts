import IRequest from '../../core/interface/IRequest';
export default class GetRandomDisplayItemByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private showcaseName;
    private displayItemName;
    private userId;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRandomDisplayItemByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
