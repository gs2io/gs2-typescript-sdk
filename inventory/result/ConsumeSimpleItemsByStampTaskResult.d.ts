import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class ConsumeSimpleItemsByStampTaskResult implements IResult {
    private items;
    private newContextStack;
    getItems(): Gs2Inventory.SimpleItem[] | null;
    setItems(items: Gs2Inventory.SimpleItem[] | null): this;
    withItems(items: Gs2Inventory.SimpleItem[] | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ConsumeSimpleItemsByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
