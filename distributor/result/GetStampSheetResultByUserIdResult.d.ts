import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class GetStampSheetResultByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Distributor.StampSheetResult | null;
    setItem(item: Gs2Distributor.StampSheetResult | null): this;
    withItem(item: Gs2Distributor.StampSheetResult | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStampSheetResultByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
