import IResult from '@/gs2/core/interface/IResult';
export declare class LoginResult implements IResult {
    private token;
    private userId;
    private expire;
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
    }): LoginResult;
    toDict(): {
        [key: string]: any;
    };
}
