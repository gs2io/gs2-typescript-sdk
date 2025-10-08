import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetInventoryModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Inventory.InventoryModelMaster | null;
    setItem(item: Gs2Inventory.InventoryModelMaster | null): this;
    withItem(item: Gs2Inventory.InventoryModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetInventoryModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
