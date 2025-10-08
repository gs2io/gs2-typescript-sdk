import IModel from '../../core/interface/IModel';
export default class InventoryNamespaceAcquireDistributionSegment implements IModel {
    private inventoryName;
    private count;
    getInventoryName(): string | null;
    setInventoryName(inventoryName: string | null): this;
    withInventoryName(inventoryName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceAcquireDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
