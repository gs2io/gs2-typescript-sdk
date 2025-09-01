import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class VerifyBigItemByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Inventory.BigItem | null;
    setItem(item: Gs2Inventory.BigItem | null): this;
    withItem(item: Gs2Inventory.BigItem | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyBigItemByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
