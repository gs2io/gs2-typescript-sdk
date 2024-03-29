import IRequest from '../../core/interface/IRequest';
export default class GetBonusModelByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private bonusModelName;
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
    getBonusModelName(): string | null;
    setBonusModelName(bonusModelName: string | null): this;
    withBonusModelName(bonusModelName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBonusModelByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
