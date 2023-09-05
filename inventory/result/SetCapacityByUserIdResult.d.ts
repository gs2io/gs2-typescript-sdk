import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class SetCapacityByUserIdResult implements IResult {
    private item;
    private old;
    getItem(): Gs2Inventory.Inventory | null;
    setItem(item: Gs2Inventory.Inventory | null): this;
    withItem(item: Gs2Inventory.Inventory | null): this;
    getOld(): Gs2Inventory.Inventory | null;
    setOld(old: Gs2Inventory.Inventory | null): this;
    withOld(old: Gs2Inventory.Inventory | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetCapacityByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
