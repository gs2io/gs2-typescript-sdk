import IRequest from '../../core/interface/IRequest';
export default class RecoverStaminaByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private staminaName;
    private userId;
    private recoverValue;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getStaminaName(): string | null;
    setStaminaName(staminaName: string | null): this;
    withStaminaName(staminaName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getRecoverValue(): number | null;
    setRecoverValue(recoverValue: number | null): this;
    withRecoverValue(recoverValue: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RecoverStaminaByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}