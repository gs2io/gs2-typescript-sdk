import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetInventoryMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.InventoryMetrics | null;
    setItem(item: Gs2Watch.InventoryMetrics | null): this;
    withItem(item: Gs2Watch.InventoryMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetInventoryMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
