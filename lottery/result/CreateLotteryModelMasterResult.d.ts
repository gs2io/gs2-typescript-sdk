import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class CreateLotteryModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Lottery.LotteryModelMaster | null;
    setItem(item: Gs2Lottery.LotteryModelMaster | null): this;
    withItem(item: Gs2Lottery.LotteryModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateLotteryModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
