import IModel from '../../core/interface/IModel';
export default class FriendUser implements IModel {
    private userId;
    private publicProfile;
    private friendProfile;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getPublicProfile(): string | null;
    setPublicProfile(publicProfile: string | null): this;
    withPublicProfile(publicProfile: string | null): this;
    getFriendProfile(): string | null;
    setFriendProfile(friendProfile: string | null): this;
    withFriendProfile(friendProfile: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendUser | null;
    toDict(): {
        [key: string]: any;
    };
}
