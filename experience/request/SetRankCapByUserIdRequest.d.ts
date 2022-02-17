import IRequest from '../../core/interface/IRequest';
export default class SetRankCapByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private experienceName;
    private propertyId;
    private rankCapValue;
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
    getExperienceName(): string | null;
    setExperienceName(experienceName: string | null): this;
    withExperienceName(experienceName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getRankCapValue(): number | null;
    setRankCapValue(rankCapValue: number | null): this;
    withRankCapValue(rankCapValue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetRankCapByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
