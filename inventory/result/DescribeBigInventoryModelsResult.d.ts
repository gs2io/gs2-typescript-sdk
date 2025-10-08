import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class DescribeBigInventoryModelsResult implements IResult {
    private items;
    getItems(): Gs2Inventory.BigInventoryModel[] | null;
    setItems(items: Gs2Inventory.BigInventoryModel[] | null): this;
    withItems(items: Gs2Inventory.BigInventoryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBigInventoryModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
