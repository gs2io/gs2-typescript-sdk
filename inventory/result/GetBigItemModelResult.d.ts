import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetBigItemModelResult implements IResult {
    private item;
    getItem(): Gs2Inventory.BigItemModel | null;
    setItem(item: Gs2Inventory.BigItemModel | null): this;
    withItem(item: Gs2Inventory.BigItemModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBigItemModelResult;
    toDict(): {
        [key: string]: any;
    };
}
