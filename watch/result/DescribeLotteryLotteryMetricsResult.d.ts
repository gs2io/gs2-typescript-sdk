import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeLotteryLotteryMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.LotteryLottery[] | null;
    setItems(items: Gs2Watch.LotteryLottery[] | null): this;
    withItems(items: Gs2Watch.LotteryLottery[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLotteryLotteryMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
