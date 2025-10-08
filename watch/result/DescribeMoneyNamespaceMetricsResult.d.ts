import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeMoneyNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.MoneyNamespace[] | null;
    setItems(items: Gs2Watch.MoneyNamespace[] | null): this;
    withItems(items: Gs2Watch.MoneyNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMoneyNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
