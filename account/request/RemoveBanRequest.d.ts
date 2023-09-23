import IRequest from '../../core/interface/IRequest';
export default class RemoveBanRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private banStatusName;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getBanStatusName(): string | null;
    setBanStatusName(banStatusName: string | null): this;
    withBanStatusName(banStatusName: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RemoveBanRequest;
    toDict(): {
        [key: string]: any;
    };
}
