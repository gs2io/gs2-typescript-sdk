import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeKeyNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.KeyNamespace[] | null;
    setItems(items: Gs2Watch.KeyNamespace[] | null): this;
    withItems(items: Gs2Watch.KeyNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeKeyNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
