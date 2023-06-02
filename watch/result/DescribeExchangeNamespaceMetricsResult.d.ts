import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeExchangeNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.ExchangeNamespace[] | null;
    setItems(items: Gs2Watch.ExchangeNamespace[] | null): this;
    withItems(items: Gs2Watch.ExchangeNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeExchangeNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
