import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DeleteInventoryModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Inventory.InventoryModelMaster | null;
    setItem(item: Gs2Inventory.InventoryModelMaster | null): this;
    withItem(item: Gs2Inventory.InventoryModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteInventoryModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
