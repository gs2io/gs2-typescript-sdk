import IModel from '../../core/interface/IModel';
export default class FriendRequest implements IModel {
    private userId;
    private targetUserId;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTargetUserId(): string | null;
    setTargetUserId(targetUserId: string | null): this;
    withTargetUserId(targetUserId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FriendRequest | null;
    toDict(): {
        [key: string]: any;
    };
}
