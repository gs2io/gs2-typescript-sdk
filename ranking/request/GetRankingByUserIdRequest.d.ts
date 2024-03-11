import IRequest from '../../core/interface/IRequest';
export default class GetRankingByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private categoryName;
    private userId;
    private scorerUserId;
    private uniqueId;
    private additionalScopeName;
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
    getScorerUserId(): string | null;
    setScorerUserId(scorerUserId: string | null): this;
    withScorerUserId(scorerUserId: string | null): this;
    getUniqueId(): string | null;
    setUniqueId(uniqueId: string | null): this;
    withUniqueId(uniqueId: string | null): this;
    getAdditionalScopeName(): string | null;
    setAdditionalScopeName(additionalScopeName: string | null): this;
    withAdditionalScopeName(additionalScopeName: string | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRankingByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
