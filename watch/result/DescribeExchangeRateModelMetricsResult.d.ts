import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeExchangeRateModelMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.ExchangeRateModel[] | null;
    setItems(items: Gs2Watch.ExchangeRateModel[] | null): this;
    withItems(items: Gs2Watch.ExchangeRateModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeExchangeRateModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
