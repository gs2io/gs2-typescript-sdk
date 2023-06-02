import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetLotteryNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.LotteryNamespace | null;
    setItem(item: Gs2Watch.LotteryNamespace | null): this;
    withItem(item: Gs2Watch.LotteryNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLotteryNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
