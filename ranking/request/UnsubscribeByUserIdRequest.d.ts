import IRequest from '../../core/interface/IRequest';
export default class UnsubscribeByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private categoryName;
    private userId;
    private targetUserId;
    private timeOffsetToken;
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
    getCategoryName(): string | null;
    setCategoryName(categoryName: string | null): this;
    withCategoryName(categoryName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTargetUserId(): string | null;
    setTargetUserId(targetUserId: string | null): this;
    withTargetUserId(targetUserId: string | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnsubscribeByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
