import IModel from '../../core/interface/IModel';
export default class Profile implements IModel {
    private profileId;
    private userId;
    private publicProfile;
    private followerProfile;
    private friendProfile;
    private createdAt;
    private updatedAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null): string | null;
    getProfileId(): string | null;
    setProfileId(profileId: string | null): this;
    withProfileId(profileId: string | null): this;
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
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Profile | null;
    toDict(): {
        [key: string]: any;
    };
}
