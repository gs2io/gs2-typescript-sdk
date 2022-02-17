import IResult from '../../core/interface/IResult';
import * as Gs2Money from '../model';
export default class WithdrawResult implements IResult {
    private item;
    private price;
    getItem(): Gs2Money.Wallet | null;
    setItem(item: Gs2Money.Wallet | null): this;
    withItem(item: Gs2Money.Wallet | null): this;
    getPrice(): number | null;
    setPrice(price: number | null): this;
    withPrice(price: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WithdrawResult;
    toDict(): {
        [key: string]: any;
    };
}
