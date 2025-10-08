import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class VerifyItemSetByStampTaskResult implements IResult {
    private items;
    private newContextStack;
    getItems(): Gs2Inventory.ItemSet[] | null;
    setItems(items: Gs2Inventory.ItemSet[] | null): this;
    withItems(items: Gs2Inventory.ItemSet[] | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyItemSetByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
