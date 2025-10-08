import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetSimpleInventoryModelResult implements IResult {
    private item;
    getItem(): Gs2Inventory.SimpleInventoryModel | null;
    setItem(item: Gs2Inventory.SimpleInventoryModel | null): this;
    withItem(item: Gs2Inventory.SimpleInventoryModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetSimpleInventoryModelResult;
    toDict(): {
        [key: string]: any;
    };
}
