import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetExchangeRateModelMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.ExchangeRateModel | null;
    setItem(item: Gs2Watch.ExchangeRateModel | null): this;
    withItem(item: Gs2Watch.ExchangeRateModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetExchangeRateModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
