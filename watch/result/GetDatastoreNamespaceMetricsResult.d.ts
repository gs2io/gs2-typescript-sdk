import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetDatastoreNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.DatastoreNamespace | null;
    setItem(item: Gs2Watch.DatastoreNamespace | null): this;
    withItem(item: Gs2Watch.DatastoreNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetDatastoreNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
