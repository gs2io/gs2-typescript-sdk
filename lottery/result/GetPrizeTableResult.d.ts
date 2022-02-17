import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class GetPrizeTableResult implements IResult {
    private item;
    getItem(): Gs2Lottery.PrizeTable | null;
    setItem(item: Gs2Lottery.PrizeTable | null): this;
    withItem(item: Gs2Lottery.PrizeTable | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetPrizeTableResult;
    toDict(): {
        [key: string]: any;
    };
}
