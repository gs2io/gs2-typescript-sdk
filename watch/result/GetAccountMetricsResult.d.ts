import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetAccountMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.AccountMetrics | null;
    setItem(item: Gs2Watch.AccountMetrics | null): this;
    withItem(item: Gs2Watch.AccountMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetAccountMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
