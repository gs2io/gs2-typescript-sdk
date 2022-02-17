import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class AddCapacityByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Inventory.Inventory | null;
    setItem(item: Gs2Inventory.Inventory | null): this;
    withItem(item: Gs2Inventory.Inventory | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AddCapacityByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
