import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
import * as Gs2Grade from '../../grade/model';
export default class AcquireItemSetWithGradeByUserIdResult implements IResult {
    private item;
    private status;
    private itemModel;
    private inventory;
    private overflowCount;
    getItem(): Gs2Inventory.ItemSet | null;
    setItem(item: Gs2Inventory.ItemSet | null): this;
    withItem(item: Gs2Inventory.ItemSet | null): this;
    getStatus(): Gs2Grade.Status | null;
    setStatus(status: Gs2Grade.Status | null): this;
    withStatus(status: Gs2Grade.Status | null): this;
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
    }): AcquireItemSetWithGradeByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
