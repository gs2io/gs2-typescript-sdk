import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetExchangeNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.ExchangeNamespace | null;
    setItem(item: Gs2Watch.ExchangeNamespace | null): this;
    withItem(item: Gs2Watch.ExchangeNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetExchangeNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
