import IRequest from '../../core/interface/IRequest';
export default class UpdateProfileByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private publicProfile;
    private followerProfile;
    private friendProfile;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getPublicProfile(): string | null;
    setPublicProfile(publicProfile: string | null): this;
    withPublicProfile(publicProfile: string | null): this;
    getFollowerProfile(): string | null;
    setFollowerProfile(followerProfile: string | null): this;
    withFollowerProfile(followerProfile: string | null): this;
    getFriendProfile(): string | null;
    setFriendProfile(friendProfile: string | null): this;
    withFriendProfile(friendProfile: string | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateProfileByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
