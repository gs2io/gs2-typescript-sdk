import IResult from '../../core/interface/IResult';
export default class AssumeByUserIdResult implements IResult {
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
    }): AssumeByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
