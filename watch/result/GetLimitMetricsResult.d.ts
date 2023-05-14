import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetLimitMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.LimitMetrics | null;
    setItem(item: Gs2Watch.LimitMetrics | null): this;
    withItem(item: Gs2Watch.LimitMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLimitMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
