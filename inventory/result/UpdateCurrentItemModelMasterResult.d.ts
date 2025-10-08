import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class UpdateCurrentItemModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Inventory.CurrentItemModelMaster | null;
    setItem(item: Gs2Inventory.CurrentItemModelMaster | null): this;
    withItem(item: Gs2Inventory.CurrentItemModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentItemModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
