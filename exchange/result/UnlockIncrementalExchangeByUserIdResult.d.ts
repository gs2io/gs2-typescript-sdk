import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class UnlockIncrementalExchangeByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Exchange.IncrementalRateModel | null;
    setItem(item: Gs2Exchange.IncrementalRateModel | null): this;
    withItem(item: Gs2Exchange.IncrementalRateModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnlockIncrementalExchangeByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
