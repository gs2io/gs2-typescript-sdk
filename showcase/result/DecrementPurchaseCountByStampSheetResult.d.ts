import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class DecrementPurchaseCountByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2Showcase.RandomDisplayItem | null;
    setItem(item: Gs2Showcase.RandomDisplayItem | null): this;
    withItem(item: Gs2Showcase.RandomDisplayItem | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DecrementPurchaseCountByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
