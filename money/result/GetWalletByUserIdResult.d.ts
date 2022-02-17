import IResult from '../../core/interface/IResult';
import * as Gs2Money from '../model';
export default class GetWalletByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Money.Wallet | null;
    setItem(item: Gs2Money.Wallet | null): this;
    withItem(item: Gs2Money.Wallet | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetWalletByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
