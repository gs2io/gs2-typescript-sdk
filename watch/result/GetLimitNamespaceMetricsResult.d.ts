import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetLimitNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.LimitNamespace | null;
    setItem(item: Gs2Watch.LimitNamespace | null): this;
    withItem(item: Gs2Watch.LimitNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLimitNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
