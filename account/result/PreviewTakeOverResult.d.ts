import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class PreviewTakeOverResult implements IResult {
    private item;
    private banStatuses;
    private token;
    private expire;
    getItem(): Gs2Account.Account | null;
    setItem(item: Gs2Account.Account | null): this;
    withItem(item: Gs2Account.Account | null): this;
    getBanStatuses(): Gs2Account.BanStatus[] | null;
    setBanStatuses(banStatuses: Gs2Account.BanStatus[] | null): this;
    withBanStatuses(banStatuses: Gs2Account.BanStatus[] | null): this;
    getToken(): string | null;
    setToken(token: string | null): this;
    withToken(token: string | null): this;
    getExpire(): number | null;
    setExpire(expire: number | null): this;
    withExpire(expire: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PreviewTakeOverResult;
    toDict(): {
        [key: string]: any;
    };
}
