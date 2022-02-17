import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class GetCurrentLotteryMasterResult implements IResult {
    private item;
    getItem(): Gs2Lottery.CurrentLotteryMaster | null;
    setItem(item: Gs2Lottery.CurrentLotteryMaster | null): this;
    withItem(item: Gs2Lottery.CurrentLotteryMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentLotteryMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
