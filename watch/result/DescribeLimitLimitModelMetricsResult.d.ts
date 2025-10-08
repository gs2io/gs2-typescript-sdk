import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeLimitLimitModelMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.LimitLimitModel[] | null;
    setItems(items: Gs2Watch.LimitLimitModel[] | null): this;
    withItems(items: Gs2Watch.LimitLimitModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLimitLimitModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
