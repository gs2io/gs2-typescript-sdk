import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetInventoryNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.InventoryNamespace | null;
    setItem(item: Gs2Watch.InventoryNamespace | null): this;
    withItem(item: Gs2Watch.InventoryNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetInventoryNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
