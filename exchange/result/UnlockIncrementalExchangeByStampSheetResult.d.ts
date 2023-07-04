import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class UnlockIncrementalExchangeByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2Exchange.IncrementalRateModel | null;
    setItem(item: Gs2Exchange.IncrementalRateModel | null): this;
    withItem(item: Gs2Exchange.IncrementalRateModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnlockIncrementalExchangeByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
