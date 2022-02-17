import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class GetLotteryModelResult implements IResult {
    private item;
    getItem(): Gs2Lottery.LotteryModel | null;
    setItem(item: Gs2Lottery.LotteryModel | null): this;
    withItem(item: Gs2Lottery.LotteryModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetLotteryModelResult;
    toDict(): {
        [key: string]: any;
    };
}
