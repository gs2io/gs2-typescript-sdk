import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class CreateSimpleInventoryModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Inventory.SimpleInventoryModelMaster | null;
    setItem(item: Gs2Inventory.SimpleInventoryModelMaster | null): this;
    withItem(item: Gs2Inventory.SimpleInventoryModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateSimpleInventoryModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
