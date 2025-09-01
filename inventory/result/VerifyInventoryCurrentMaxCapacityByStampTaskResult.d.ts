import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class VerifyInventoryCurrentMaxCapacityByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Inventory.Inventory | null;
    setItem(item: Gs2Inventory.Inventory | null): this;
    withItem(item: Gs2Inventory.Inventory | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyInventoryCurrentMaxCapacityByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
