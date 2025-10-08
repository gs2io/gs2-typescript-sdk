import IModel from '../../core/interface/IModel';
export default class InventoryInventoryAcquireDistributionSegment implements IModel {
    private itemName;
    private count;
    getItemName(): string | null;
    setItemName(itemName: string | null): this;
    withItemName(itemName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryAcquireDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
