import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetBigItemResult implements IResult {
    private item;
    private itemModel;
    getItem(): Gs2Inventory.BigItem | null;
    setItem(item: Gs2Inventory.BigItem | null): this;
    withItem(item: Gs2Inventory.BigItem | null): this;
    getItemModel(): Gs2Inventory.BigItemModel | null;
    setItemModel(itemModel: Gs2Inventory.BigItemModel | null): this;
    withItemModel(itemModel: Gs2Inventory.BigItemModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBigItemResult;
    toDict(): {
        [key: string]: any;
    };
}
