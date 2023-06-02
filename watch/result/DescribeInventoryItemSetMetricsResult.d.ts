import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeInventoryItemSetMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.InventoryItemSet[] | null;
    setItems(items: Gs2Watch.InventoryItemSet[] | null): this;
    withItems(items: Gs2Watch.InventoryItemSet[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeInventoryItemSetMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
