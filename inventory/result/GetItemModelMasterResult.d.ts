import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetItemModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Inventory.ItemModelMaster | null;
    setItem(item: Gs2Inventory.ItemModelMaster | null): this;
    withItem(item: Gs2Inventory.ItemModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetItemModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
