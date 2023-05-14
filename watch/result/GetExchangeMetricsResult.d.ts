import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetExchangeMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.ExchangeMetrics | null;
    setItem(item: Gs2Watch.ExchangeMetrics | null): this;
    withItem(item: Gs2Watch.ExchangeMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetExchangeMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
