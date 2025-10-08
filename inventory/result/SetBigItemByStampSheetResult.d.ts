import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class SetBigItemByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2Inventory.BigItem | null;
    setItem(item: Gs2Inventory.BigItem | null): this;
    withItem(item: Gs2Inventory.BigItem | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetBigItemByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
