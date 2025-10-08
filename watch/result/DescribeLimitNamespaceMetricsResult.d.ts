import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeLimitNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.LimitNamespace[] | null;
    setItems(items: Gs2Watch.LimitNamespace[] | null): this;
    withItems(items: Gs2Watch.LimitNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLimitNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
