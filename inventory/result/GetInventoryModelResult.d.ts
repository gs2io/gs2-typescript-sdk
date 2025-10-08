import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetInventoryModelResult implements IResult {
    private item;
    getItem(): Gs2Inventory.InventoryModel | null;
    setItem(item: Gs2Inventory.InventoryModel | null): this;
    withItem(item: Gs2Inventory.InventoryModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetInventoryModelResult;
    toDict(): {
        [key: string]: any;
    };
}
