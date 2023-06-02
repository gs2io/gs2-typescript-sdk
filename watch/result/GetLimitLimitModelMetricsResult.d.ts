import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetLimitLimitModelMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.LimitLimitModel | null;
    setItem(item: Gs2Watch.LimitLimitModel | null): this;
    withItem(item: Gs2Watch.LimitLimitModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLimitLimitModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
