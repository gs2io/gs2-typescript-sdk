import IRequest from '../../core/interface/IRequest';
export default class DescribeRankingsRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private categoryName;
    private accessToken;
    private additionalScopeName;
    private startIndex;
    private pageToken;
    private limit;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
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
    static fromDict(data: {
        [key: string]: any;
    }): DescribeRankingsRequest;
    toDict(): {
        [key: string]: any;
    };
}
