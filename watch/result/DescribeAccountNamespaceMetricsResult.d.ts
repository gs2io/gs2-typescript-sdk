import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeAccountNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.AccountNamespace[] | null;
    setItems(items: Gs2Watch.AccountNamespace[] | null): this;
    withItems(items: Gs2Watch.AccountNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeAccountNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
