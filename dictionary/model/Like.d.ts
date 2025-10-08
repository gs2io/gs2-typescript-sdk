import IModel from '../../core/interface/IModel';
export default class Like implements IModel {
    private likeId;
    private userId;
    private name;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static getEntryModelName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null, entryModelName: string | null): string | null;
    getLikeId(): string | null;
    setLikeId(likeId: string | null): this;
    withLikeId(likeId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Like | null;
    toDict(): {
        [key: string]: any;
    };
}
