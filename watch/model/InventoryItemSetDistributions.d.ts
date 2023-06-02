import IModel from '../../core/interface/IModel';
import InventoryItemSetCountDistribution from './InventoryItemSetCountDistribution';
export default class InventoryItemSetDistributions implements IModel {
    private count;
    getCount(): InventoryItemSetCountDistribution | null;
    setCount(count: InventoryItemSetCountDistribution | null): this;
    withCount(count: InventoryItemSetCountDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryItemSetDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
