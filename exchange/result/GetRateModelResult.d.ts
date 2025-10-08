import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class GetRateModelResult implements IResult {
    private item;
    getItem(): Gs2Exchange.RateModel | null;
    setItem(item: Gs2Exchange.RateModel | null): this;
    withItem(item: Gs2Exchange.RateModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRateModelResult;
    toDict(): {
        [key: string]: any;
    };
}
