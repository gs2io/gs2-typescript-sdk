import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class AddReferenceOfItemSetByStampSheetResult implements IResult {
    private item;
    private itemSet;
    private itemModel;
    private inventory;
    getItem(): string | null;
    setItem(item: string | null): this;
    withItem(item: string | null): this;
    getItemSet(): Gs2Inventory.ItemSet | null;
    setItemSet(itemSet: Gs2Inventory.ItemSet | null): this;
    withItemSet(itemSet: Gs2Inventory.ItemSet | null): this;
    getItemModel(): Gs2Inventory.ItemModel | null;
    setItemModel(itemModel: Gs2Inventory.ItemModel | null): this;
    withItemModel(itemModel: Gs2Inventory.ItemModel | null): this;
    getInventory(): Gs2Inventory.Inventory | null;
    setInventory(inventory: Gs2Inventory.Inventory | null): this;
    withInventory(inventory: Gs2Inventory.Inventory | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AddReferenceOfItemSetByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
