import IModel from '../../core/interface/IModel';
export default class IgnoreUser implements IModel {
    private userId;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getGuildModelName(grn: string): string | null;
    static getGuildName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, guildModelName: string | null, guildName: string | null): string | null;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IgnoreUser | null;
    toDict(): {
        [key: string]: any;
    };
}
