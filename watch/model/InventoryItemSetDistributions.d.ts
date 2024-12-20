import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryItemSetDistributions implements IModel {
    private count;
    getCount(): Gs2Watch.InventoryItemSetCountDistribution | null;
    setCount(count: Gs2Watch.InventoryItemSetCountDistribution | null): this;
    withCount(count: Gs2Watch.InventoryItemSetCountDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryItemSetDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
