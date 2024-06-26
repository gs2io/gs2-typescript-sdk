import IResult from '../../core/interface/IResult';
import * as Gs2Money2 from '../model';
export default class GetDailyTransactionHistoryResult implements IResult {
    private item;
    getItem(): Gs2Money2.DailyTransactionHistory | null;
    setItem(item: Gs2Money2.DailyTransactionHistory | null): this;
    withItem(item: Gs2Money2.DailyTransactionHistory | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetDailyTransactionHistoryResult;
    toDict(): {
        [key: string]: any;
    };
}
