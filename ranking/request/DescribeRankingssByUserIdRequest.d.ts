import IRequest from '../../core/interface/IRequest';
export default class DescribeRankingssByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private categoryName;
    private userId;
    private additionalScopeName;
    private startIndex;
    private pageToken;
    private limit;
    private timeOffsetToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getCategoryName(): string | null;
    setCategoryName(categoryName: string | null): this;
    withCategoryName(categoryName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getAdditionalScopeName(): string | null;
    setAdditionalScopeName(additionalScopeName: string | null): this;
    withAdditionalScopeName(additionalScopeName: string | null): this;
    getStartIndex(): number | null;
    setStartIndex(startIndex: number | null): this;
    withStartIndex(startIndex: number | null): this;
    getPageToken(): string | null;
    setPageToken(pageToken: string | null): this;
    withPageToken(pageToken: string | null): this;
    getLimit(): number | null;
    setLimit(limit: number | null): this;
    withLimit(limit: number | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRankingssByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
