import IRequest from '../../core/interface/IRequest';
export default class DescribeNearRankingsRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private categoryName;
    private additionalScopeName;
    private score;
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
    getAdditionalScopeName(): string | null;
    setAdditionalScopeName(additionalScopeName: string | null): this;
    withAdditionalScopeName(additionalScopeName: string | null): this;
    getScore(): number | null;
    setScore(score: number | null): this;
    withScore(score: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeNearRankingsRequest;
    toDict(): {
        [key: string]: any;
    };
}
