import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class AuthenticationResult implements IResult {
    private item;
    private banStatuses;
    private body;
    private signature;
    getItem(): Gs2Account.Account | null;
    setItem(item: Gs2Account.Account | null): this;
    withItem(item: Gs2Account.Account | null): this;
    getBanStatuses(): Gs2Account.BanStatus[] | null;
    setBanStatuses(banStatuses: Gs2Account.BanStatus[] | null): this;
    withBanStatuses(banStatuses: Gs2Account.BanStatus[] | null): this;
    getBody(): string | null;
    setBody(body: string | null): this;
    withBody(body: string | null): this;
    getSignature(): string | null;
    setSignature(signature: string | null): this;
    withSignature(signature: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AuthenticationResult;
    toDict(): {
        [key: string]: any;
    };
}
