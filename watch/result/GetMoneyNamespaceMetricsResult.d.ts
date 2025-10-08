import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetMoneyNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.MoneyNamespace | null;
    setItem(item: Gs2Watch.MoneyNamespace | null): this;
    withItem(item: Gs2Watch.MoneyNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMoneyNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
