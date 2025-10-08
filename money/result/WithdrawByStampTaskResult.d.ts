import IResult from '../../core/interface/IResult';
import * as Gs2Money from '../model';
export default class WithdrawByStampTaskResult implements IResult {
    private item;
    private price;
    private newContextStack;
    getItem(): Gs2Money.Wallet | null;
    setItem(item: Gs2Money.Wallet | null): this;
    withItem(item: Gs2Money.Wallet | null): this;
    getPrice(): number | null;
    setPrice(price: number | null): this;
    withPrice(price: number | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WithdrawByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
