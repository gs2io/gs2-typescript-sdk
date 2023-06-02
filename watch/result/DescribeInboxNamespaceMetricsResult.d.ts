import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeInboxNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.InboxNamespace[] | null;
    setItems(items: Gs2Watch.InboxNamespace[] | null): this;
    withItems(items: Gs2Watch.InboxNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeInboxNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
