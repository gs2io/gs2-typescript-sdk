import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class VerifySimpleItemResult implements IResult {
    private item;
    getItem(): Gs2Inventory.SimpleItem | null;
    setItem(item: Gs2Inventory.SimpleItem | null): this;
    withItem(item: Gs2Inventory.SimpleItem | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifySimpleItemResult;
    toDict(): {
        [key: string]: any;
    };
}
