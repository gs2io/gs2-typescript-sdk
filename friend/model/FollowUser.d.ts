import IModel from '../../core/interface/IModel';
export default class FollowUser implements IModel {
    private userId;
    private publicProfile;
    private followerProfile;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getPublicProfile(): string | null;
    setPublicProfile(publicProfile: string | null): this;
    withPublicProfile(publicProfile: string | null): this;
    getFollowerProfile(): string | null;
    setFollowerProfile(followerProfile: string | null): this;
    withFollowerProfile(followerProfile: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FollowUser | null;
    toDict(): {
        [key: string]: any;
    };
}
