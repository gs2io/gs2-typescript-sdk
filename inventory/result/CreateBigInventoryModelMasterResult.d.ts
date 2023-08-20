import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class CreateBigInventoryModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Inventory.BigInventoryModelMaster | null;
    setItem(item: Gs2Inventory.BigInventoryModelMaster | null): this;
    withItem(item: Gs2Inventory.BigInventoryModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateBigInventoryModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
