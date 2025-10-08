import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class CreateBigItemModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Inventory.BigItemModelMaster | null;
    setItem(item: Gs2Inventory.BigItemModelMaster | null): this;
    withItem(item: Gs2Inventory.BigItemModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateBigItemModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
