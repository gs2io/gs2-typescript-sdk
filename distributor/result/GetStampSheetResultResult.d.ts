import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class GetStampSheetResultResult implements IResult {
    private item;
    getItem(): Gs2Distributor.StampSheetResult | null;
    setItem(item: Gs2Distributor.StampSheetResult | null): this;
    withItem(item: Gs2Distributor.StampSheetResult | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStampSheetResultResult;
    toDict(): {
        [key: string]: any;
    };
}
