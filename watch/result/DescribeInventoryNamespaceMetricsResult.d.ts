import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeInventoryNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.InventoryNamespace[] | null;
    setItems(items: Gs2Watch.InventoryNamespace[] | null): this;
    withItems(items: Gs2Watch.InventoryNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeInventoryNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
