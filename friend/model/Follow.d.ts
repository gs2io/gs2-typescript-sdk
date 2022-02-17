import IModel from '../../core/interface/IModel';
export default class Follow implements IModel {
    private followId;
    private userId;
    private targetUserIds;
    private createdAt;
    private updatedAt;
    getFollowId(): string | null;
    setFollowId(followId: string | null): this;
    withFollowId(followId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTargetUserIds(): string[] | null;
    setTargetUserIds(targetUserIds: string[] | null): this;
    withTargetUserIds(targetUserIds: string[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Follow | null;
    toDict(): {
        [key: string]: any;
    };
}
