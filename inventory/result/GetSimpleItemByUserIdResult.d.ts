import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetSimpleItemByUserIdResult implements IResult {
    private item;
    private itemModel;
    getItem(): Gs2Inventory.SimpleItem | null;
    setItem(item: Gs2Inventory.SimpleItem | null): this;
    withItem(item: Gs2Inventory.SimpleItem | null): this;
    getItemModel(): Gs2Inventory.SimpleItemModel | null;
    setItemModel(itemModel: Gs2Inventory.SimpleItemModel | null): this;
    withItemModel(itemModel: Gs2Inventory.SimpleItemModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetSimpleItemByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
