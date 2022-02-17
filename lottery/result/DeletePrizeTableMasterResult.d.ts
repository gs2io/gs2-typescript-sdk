import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class DeletePrizeTableMasterResult implements IResult {
    private item;
    getItem(): Gs2Lottery.PrizeTableMaster | null;
    setItem(item: Gs2Lottery.PrizeTableMaster | null): this;
    withItem(item: Gs2Lottery.PrizeTableMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeletePrizeTableMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
