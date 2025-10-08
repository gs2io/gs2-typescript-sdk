import IResult from '../../core/interface/IResult';
import * as Gs2Account from '../model';
export default class DoTakeOverOpenIdConnectResult implements IResult {
    private item;
    getItem(): Gs2Account.Account | null;
    setItem(item: Gs2Account.Account | null): this;
    withItem(item: Gs2Account.Account | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DoTakeOverOpenIdConnectResult;
    toDict(): {
        [key: string]: any;
    };
}
