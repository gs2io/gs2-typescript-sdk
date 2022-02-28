import IModel from '../../core/interface/IModel';
export default class Subscribe implements IModel {
    private subscribeId;
    private categoryName;
    private userId;
    private targetUserIds;
    private subscribedUserIds;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getCategoryName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, categoryName: string | null): string | null;
    getSubscribeId(): string | null;
    setSubscribeId(subscribeId: string | null): this;
    withSubscribeId(subscribeId: string | null): this;
    getCategoryName(): string | null;
    setCategoryName(categoryName: string | null): this;
    withCategoryName(categoryName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTargetUserIds(): string[] | null;
    setTargetUserIds(targetUserIds: string[] | null): this;
    withTargetUserIds(targetUserIds: string[] | null): this;
    getSubscribedUserIds(): string[] | null;
    setSubscribedUserIds(subscribedUserIds: string[] | null): this;
    withSubscribedUserIds(subscribedUserIds: string[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Subscribe | null;
    toDict(): {
        [key: string]: any;
    };
}
