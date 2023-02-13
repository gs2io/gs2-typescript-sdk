import IModel from '../../core/interface/IModel';
export default class SubscribeUser implements IModel {
    private subscribeUserId;
    private categoryName;
    private userId;
    private targetUserId;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getCategoryName(grn: string): string | null;
    static getTargetUserId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, categoryName: string | null, targetUserId: string | null): string | null;
    getSubscribeUserId(): string | null;
    setSubscribeUserId(subscribeUserId: string | null): this;
    withSubscribeUserId(subscribeUserId: string | null): this;
    getCategoryName(): string | null;
    setCategoryName(categoryName: string | null): this;
    withCategoryName(categoryName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTargetUserId(): string | null;
    setTargetUserId(targetUserId: string | null): this;
    withTargetUserId(targetUserId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SubscribeUser | null;
    toDict(): {
        [key: string]: any;
    };
}
