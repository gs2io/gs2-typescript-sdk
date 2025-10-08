import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeShowcaseNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.ShowcaseNamespace[] | null;
    setItems(items: Gs2Watch.ShowcaseNamespace[] | null): this;
    withItems(items: Gs2Watch.ShowcaseNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeShowcaseNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
