import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class WithdrawByStampTaskResult implements IResult {
    private item;
    private withdrawTransactions;
    private newContextStack;
    getItem(): Gs2Money2.Wallet | null;
    setItem(item: Gs2Money2.Wallet | null): this;
    withItem(item: Gs2Money2.Wallet | null): this;
    getWithdrawTransactions(): Gs2Money2.DepositTransaction[] | null;
    setWithdrawTransactions(withdrawTransactions: Gs2Money2.DepositTransaction[] | null): this;
    withWithdrawTransactions(withdrawTransactions: Gs2Money2.DepositTransaction[] | null): this;
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
