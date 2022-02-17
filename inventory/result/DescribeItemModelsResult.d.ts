import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeItemModelsResult implements IResult {
    private items;
    getItems(): Gs2Inventory.ItemModel[] | null;
    setItems(items: Gs2Inventory.ItemModel[] | null): this;
    withItems(items: Gs2Inventory.ItemModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeItemModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
