import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class VerifyReferenceOfByStampTaskResult implements IResult {
    private item;
    private itemSet;
    private itemModel;
    private inventory;
    private newContextStack;
    getItem(): string[] | null;
    setItem(item: string[] | null): this;
    withItem(item: string[] | null): this;
    getItemSet(): Gs2Inventory.ItemSet | null;
    setItemSet(itemSet: Gs2Inventory.ItemSet | null): this;
    withItemSet(itemSet: Gs2Inventory.ItemSet | null): this;
    getItemModel(): Gs2Inventory.ItemModel | null;
    setItemModel(itemModel: Gs2Inventory.ItemModel | null): this;
    withItemModel(itemModel: Gs2Inventory.ItemModel | null): this;
    getInventory(): Gs2Inventory.Inventory | null;
    setInventory(inventory: Gs2Inventory.Inventory | null): this;
    withInventory(inventory: Gs2Inventory.Inventory | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyReferenceOfByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
