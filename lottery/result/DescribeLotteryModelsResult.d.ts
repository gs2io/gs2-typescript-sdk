import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DescribeLotteryModelsResult implements IResult {
    private items;
    getItems(): Gs2Lottery.LotteryModel[] | null;
    setItems(items: Gs2Lottery.LotteryModel[] | null): this;
    withItems(items: Gs2Lottery.LotteryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeLotteryModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
