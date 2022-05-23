import IModel from '../../core/interface/IModel';
export default class Account implements IModel {
    private accountId;
    private userId;
    private password;
    private timeOffset;
    private banned;
    private createdAt;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getUserId(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, userId: string | null): string | null;
    getAccountId(): string | null;
    setAccountId(accountId: string | null): this;
    withAccountId(accountId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    getTimeOffset(): number | null;
    setTimeOffset(timeOffset: number | null): this;
    withTimeOffset(timeOffset: number | null): this;
    getBanned(): boolean | null;
    setBanned(banned: boolean | null): this;
    withBanned(banned: boolean | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Account | null;
    toDict(): {
        [key: string]: any;
    };
}
