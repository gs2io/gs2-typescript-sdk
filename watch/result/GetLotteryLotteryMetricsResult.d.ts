import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetLotteryLotteryMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.LotteryLottery | null;
    setItem(item: Gs2Watch.LotteryLottery | null): this;
    withItem(item: Gs2Watch.LotteryLottery | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLotteryLotteryMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
