import IRequest from '../../core/interface/IRequest';
export default class AcceptRequestByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private fromUserId;
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
    getFromUserId(): string | null;
    setFromUserId(fromUserId: string | null): this;
    withFromUserId(fromUserId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcceptRequestByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
