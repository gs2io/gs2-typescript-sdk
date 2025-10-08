import IModel from '../../core/interface/IModel';
export default class BlackList implements IModel {
    private blackListId;
    private userId;
    private targetUserIds;
    private createdAt;
    private updatedAt;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null): string | null;
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
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BlackList | null;
    toDict(): {
        [key: string]: any;
    };
}
