import IModel from '../../core/interface/IModel';
export default class BlackList implements IModel {
    private blackListId;
    private userId;
    private targetUserIds;
    private createdAt;
    private updatedAt;
    getBlackListId(): string | null;
    setBlackListId(blackListId: string | null): this;
    withBlackListId(blackListId: string | null): this;
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
    }): BlackList | null;
    toDict(): {
        [key: string]: any;
    };
}
