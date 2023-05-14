import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetGeneralMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.GeneralMetrics | null;
    setItem(item: Gs2Watch.GeneralMetrics | null): this;
    withItem(item: Gs2Watch.GeneralMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetGeneralMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
