import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class VerifySimpleItemByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Inventory.SimpleItem | null;
    setItem(item: Gs2Inventory.SimpleItem | null): this;
    withItem(item: Gs2Inventory.SimpleItem | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifySimpleItemByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
