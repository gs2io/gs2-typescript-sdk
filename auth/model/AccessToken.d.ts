import IModel from '../../core/interface/IModel';
export default class AccessToken implements IModel {
    private token;
    private userId;
    private expire;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getToken(): string | null;
    setToken(token: string | null): this;
    withToken(token: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getExpire(): number | null;
    setExpire(expire: number | null): this;
    withExpire(expire: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccessToken | null;
    toDict(): {
        [key: string]: any;
    };
}