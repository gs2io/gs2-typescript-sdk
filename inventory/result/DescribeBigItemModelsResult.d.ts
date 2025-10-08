import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeBigItemModelsResult implements IResult {
    private items;
    getItems(): Gs2Inventory.BigItemModel[] | null;
    setItems(items: Gs2Inventory.BigItemModel[] | null): this;
    withItems(items: Gs2Inventory.BigItemModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBigItemModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
