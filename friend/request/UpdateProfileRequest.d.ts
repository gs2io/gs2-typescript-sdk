import IRequest from '../../core/interface/IRequest';
export default class UpdateProfileRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private publicProfile;
    private followerProfile;
    private friendProfile;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getPublicProfile(): string | null;
    setPublicProfile(publicProfile: string | null): this;
    withPublicProfile(publicProfile: string | null): this;
    getFollowerProfile(): string | null;
    setFollowerProfile(followerProfile: string | null): this;
    withFollowerProfile(followerProfile: string | null): this;
    getFriendProfile(): string | null;
    setFriendProfile(friendProfile: string | null): this;
    withFriendProfile(friendProfile: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateProfileRequest;
    toDict(): {
        [key: string]: any;
    };
}
