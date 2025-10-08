import IModel from '../../core/interface/IModel';
export default class AccessToken implements IModel {
    private token;
    private userId;
    private federationFromUserId;
    private expire;
    private timeOffset;
    getToken(): string | null;
    setToken(token: string | null): this;
    withToken(token: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getFederationFromUserId(): string | null;
    setFederationFromUserId(federationFromUserId: string | null): this;
    withFederationFromUserId(federationFromUserId: string | null): this;
    getExpire(): number | null;
    setExpire(expire: number | null): this;
    withExpire(expire: number | null): this;
    getTimeOffset(): number | null;
    setTimeOffset(timeOffset: number | null): this;
    withTimeOffset(timeOffset: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccessToken | null;
    toDict(): {
        [key: string]: any;
    };
}
