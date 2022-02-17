import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeInventoryModelsResult implements IResult {
    private items;
    getItems(): Gs2Inventory.InventoryModel[] | null;
    setItems(items: Gs2Inventory.InventoryModel[] | null): this;
    withItems(items: Gs2Inventory.InventoryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeInventoryModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
