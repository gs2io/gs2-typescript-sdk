import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeSimpleInventoryModelsResult implements IResult {
    private items;
    getItems(): Gs2Inventory.SimpleInventoryModel[] | null;
    setItems(items: Gs2Inventory.SimpleInventoryModel[] | null): this;
    withItems(items: Gs2Inventory.SimpleInventoryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeSimpleInventoryModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
