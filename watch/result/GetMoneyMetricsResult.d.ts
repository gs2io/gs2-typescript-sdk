import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetMoneyMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.MoneyMetrics | null;
    setItem(item: Gs2Watch.MoneyMetrics | null): this;
    withItem(item: Gs2Watch.MoneyMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetMoneyMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
