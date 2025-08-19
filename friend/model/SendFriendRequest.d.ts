import IModel from '../../core/interface/IModel';
export default class SendFriendRequest implements IModel {
    private userId;
    private targetUserId;
    private publicProfile;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTargetUserId(): string | null;
    setTargetUserId(targetUserId: string | null): this;
    withTargetUserId(targetUserId: string | null): this;
    getPublicProfile(): string | null;
    setPublicProfile(publicProfile: string | null): this;
    withPublicProfile(publicProfile: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SendFriendRequest | null;
    toDict(): {
        [key: string]: any;
    };
}
