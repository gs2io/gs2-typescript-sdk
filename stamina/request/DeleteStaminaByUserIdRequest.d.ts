import IRequest from '../../core/interface/IRequest';
export default class DeleteStaminaByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private staminaName;
    private userId;
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
    getStaminaName(): string | null;
    setStaminaName(staminaName: string | null): this;
    withStaminaName(staminaName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteStaminaByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
