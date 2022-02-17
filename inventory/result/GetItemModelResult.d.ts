import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetItemModelResult implements IResult {
    private item;
    getItem(): Gs2Inventory.ItemModel | null;
    setItem(item: Gs2Inventory.ItemModel | null): this;
    withItem(item: Gs2Inventory.ItemModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetItemModelResult;
    toDict(): {
        [key: string]: any;
    };
}
