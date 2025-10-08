import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetItemWithSignatureByUserIdResult implements IResult {
    private items;
    private itemModel;
    private inventory;
    private body;
    private signature;
    getItems(): Gs2Inventory.ItemSet[] | null;
    setItems(items: Gs2Inventory.ItemSet[] | null): this;
    withItems(items: Gs2Inventory.ItemSet[] | null): this;
    getItemModel(): Gs2Inventory.ItemModel | null;
    setItemModel(itemModel: Gs2Inventory.ItemModel | null): this;
    withItemModel(itemModel: Gs2Inventory.ItemModel | null): this;
    getInventory(): Gs2Inventory.Inventory | null;
    setInventory(inventory: Gs2Inventory.Inventory | null): this;
    withInventory(inventory: Gs2Inventory.Inventory | null): this;
    getBody(): string | null;
    setBody(body: string | null): this;
    withBody(body: string | null): this;
    getSignature(): string | null;
    setSignature(signature: string | null): this;
    withSignature(signature: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetItemWithSignatureByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
