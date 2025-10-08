import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeDatastoreNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.DatastoreNamespace[] | null;
    setItems(items: Gs2Watch.DatastoreNamespace[] | null): this;
    withItems(items: Gs2Watch.DatastoreNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeDatastoreNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
