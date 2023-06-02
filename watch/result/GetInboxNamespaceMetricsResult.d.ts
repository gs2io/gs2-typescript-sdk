import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetInboxNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.InboxNamespace | null;
    setItem(item: Gs2Watch.InboxNamespace | null): this;
    withItem(item: Gs2Watch.InboxNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetInboxNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
