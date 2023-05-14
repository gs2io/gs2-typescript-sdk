import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetInboxMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.InboxMetrics | null;
    setItem(item: Gs2Watch.InboxMetrics | null): this;
    withItem(item: Gs2Watch.InboxMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetInboxMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
