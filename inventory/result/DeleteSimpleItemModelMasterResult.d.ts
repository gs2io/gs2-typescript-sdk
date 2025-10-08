import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DeleteSimpleItemModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Inventory.SimpleItemModelMaster | null;
    setItem(item: Gs2Inventory.SimpleItemModelMaster | null): this;
    withItem(item: Gs2Inventory.SimpleItemModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteSimpleItemModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
