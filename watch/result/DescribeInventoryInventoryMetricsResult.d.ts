import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeInventoryInventoryMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.InventoryInventory[] | null;
    setItems(items: Gs2Watch.InventoryInventory[] | null): this;
    withItems(items: Gs2Watch.InventoryInventory[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeInventoryInventoryMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
