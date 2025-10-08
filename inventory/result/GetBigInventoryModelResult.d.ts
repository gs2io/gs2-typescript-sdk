import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetBigInventoryModelResult implements IResult {
    private item;
    getItem(): Gs2Inventory.BigInventoryModel | null;
    setItem(item: Gs2Inventory.BigInventoryModel | null): this;
    withItem(item: Gs2Inventory.BigInventoryModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBigInventoryModelResult;
    toDict(): {
        [key: string]: any;
    };
}
