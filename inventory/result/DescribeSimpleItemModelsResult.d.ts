import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeSimpleItemModelsResult implements IResult {
    private items;
    getItems(): Gs2Inventory.SimpleItemModel[] | null;
    setItems(items: Gs2Inventory.SimpleItemModel[] | null): this;
    withItems(items: Gs2Inventory.SimpleItemModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSimpleItemModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
