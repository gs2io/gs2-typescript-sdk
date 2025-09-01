import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class VerifyItemSetByUserIdResult implements IResult {
    private items;
    getItems(): Gs2Inventory.ItemSet[] | null;
    setItems(items: Gs2Inventory.ItemSet[] | null): this;
    withItems(items: Gs2Inventory.ItemSet[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyItemSetByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
