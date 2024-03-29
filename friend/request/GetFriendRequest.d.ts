import IRequest from '../../core/interface/IRequest';
export default class GetFriendRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private targetUserId;
    private withProfile;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getTargetUserId(): string | null;
    setTargetUserId(targetUserId: string | null): this;
    withTargetUserId(targetUserId: string | null): this;
    getWithProfile(): boolean | null;
    setWithProfile(withProfile: boolean | null): this;
    withWithProfile(withProfile: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetFriendRequest;
    toDict(): {
        [key: string]: any;
    };
}
