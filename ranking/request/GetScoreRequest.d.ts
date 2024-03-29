import IRequest from '../../core/interface/IRequest';
export default class GetScoreRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private categoryName;
    private accessToken;
    private scorerUserId;
    private uniqueId;
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
    getScorerUserId(): string | null;
    setScorerUserId(scorerUserId: string | null): this;
    withScorerUserId(scorerUserId: string | null): this;
    getUniqueId(): string | null;
    setUniqueId(uniqueId: string | null): this;
    withUniqueId(uniqueId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetScoreRequest;
    toDict(): {
        [key: string]: any;
    };
}
