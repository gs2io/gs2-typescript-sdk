import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class AcquireItemSetByStampSheetResult implements IResult {
    private items;
    private itemModel;
    private inventory;
    private overflowCount;
    getItems(): Gs2Inventory.ItemSet[] | null;
    setItems(items: Gs2Inventory.ItemSet[] | null): this;
    withItems(items: Gs2Inventory.ItemSet[] | null): this;
    getItemModel(): Gs2Inventory.ItemModel | null;
    setItemModel(itemModel: Gs2Inventory.ItemModel | null): this;
    withItemModel(itemModel: Gs2Inventory.ItemModel | null): this;
    getInventory(): Gs2Inventory.Inventory | null;
    setInventory(inventory: Gs2Inventory.Inventory | null): this;
    withInventory(inventory: Gs2Inventory.Inventory | null): this;
    getOverflowCount(): number | null;
    setOverflowCount(overflowCount: number | null): this;
    withOverflowCount(overflowCount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireItemSetByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
