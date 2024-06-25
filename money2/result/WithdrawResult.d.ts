import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class WithdrawResult implements IResult {
    private item;
    private withdrawTransactions;
    getItem(): Gs2Money2.Wallet | null;
    setItem(item: Gs2Money2.Wallet | null): this;
    withItem(item: Gs2Money2.Wallet | null): this;
    getWithdrawTransactions(): Gs2Money2.DepositTransaction[] | null;
    setWithdrawTransactions(withdrawTransactions: Gs2Money2.DepositTransaction[] | null): this;
    withWithdrawTransactions(withdrawTransactions: Gs2Money2.DepositTransaction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WithdrawResult;
    toDict(): {
        [key: string]: any;
    };
}
