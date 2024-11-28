import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class RunTransactionResult implements IResult {
    private item;
    getItem(): Gs2Distributor.TransactionResult | null;
    setItem(item: Gs2Distributor.TransactionResult | null): this;
    withItem(item: Gs2Distributor.TransactionResult | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RunTransactionResult;
    toDict(): {
        [key: string]: any;
    };
}
