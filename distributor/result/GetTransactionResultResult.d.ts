import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class GetTransactionResultResult implements IResult {
    private item;
    getItem(): Gs2Distributor.TransactionResult | null;
    setItem(item: Gs2Distributor.TransactionResult | null): this;
    withItem(item: Gs2Distributor.TransactionResult | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetTransactionResultResult;
    toDict(): {
        [key: string]: any;
    };
}
