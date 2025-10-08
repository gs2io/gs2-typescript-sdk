import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class DepositByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Money2.Wallet | null;
    setItem(item: Gs2Money2.Wallet | null): this;
    withItem(item: Gs2Money2.Wallet | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DepositByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
