import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class SetSimpleItemsByStampSheetResult implements IResult {
    private items;
    getItems(): Gs2Inventory.SimpleItem[] | null;
    setItems(items: Gs2Inventory.SimpleItem[] | null): this;
    withItems(items: Gs2Inventory.SimpleItem[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetSimpleItemsByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
