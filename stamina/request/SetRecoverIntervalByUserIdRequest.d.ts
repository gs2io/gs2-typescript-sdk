import IRequest from '../../core/interface/IRequest';
export default class SetRecoverIntervalByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private staminaName;
    private userId;
    private recoverIntervalMinutes;
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
    getRecoverIntervalMinutes(): number | null;
    setRecoverIntervalMinutes(recoverIntervalMinutes: number | null): this;
    withRecoverIntervalMinutes(recoverIntervalMinutes: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetRecoverIntervalByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
