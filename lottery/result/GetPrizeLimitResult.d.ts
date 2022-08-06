import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class GetPrizeLimitResult implements IResult {
    private item;
    getItem(): Gs2Lottery.PrizeLimit | null;
    setItem(item: Gs2Lottery.PrizeLimit | null): this;
    withItem(item: Gs2Lottery.PrizeLimit | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetPrizeLimitResult;
    toDict(): {
        [key: string]: any;
    };
}
