import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeLimitCounterMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.LimitCounter[] | null;
    setItems(items: Gs2Watch.LimitCounter[] | null): this;
    withItems(items: Gs2Watch.LimitCounter[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLimitCounterMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
