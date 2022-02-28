import IModel from '../../core/interface/IModel';
export default class Password implements IModel {
    private userId;
    private userName;
    private createdAt;
    static getOwnerId(grn: string): string | null;
    static getUserName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(ownerId: string | null, userName: string | null): string | null;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getUserName(): string | null;
    setUserName(userName: string | null): this;
    withUserName(userName: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Password | null;
    toDict(): {
        [key: string]: any;
    };
}
