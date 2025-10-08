import IModel from '../../core/interface/IModel';
import InventoryItemStatistics from './InventoryItemStatistics';
import InventoryItemDistribution from './InventoryItemDistribution';
export default class InventoryItem implements IModel {
    private itemName;
    private statistics;
    private distribution;
    getItemName(): string | null;
    setItemName(itemName: string | null): this;
    withItemName(itemName: string | null): this;
    getStatistics(): InventoryItemStatistics | null;
    setStatistics(statistics: InventoryItemStatistics | null): this;
    withStatistics(statistics: InventoryItemStatistics | null): this;
    getDistribution(): InventoryItemDistribution[] | null;
    setDistribution(distribution: InventoryItemDistribution[] | null): this;
    withDistribution(distribution: InventoryItemDistribution[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryItem | null;
    toDict(): {
        [key: string]: any;
    };
}
