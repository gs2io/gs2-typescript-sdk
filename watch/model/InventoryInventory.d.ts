import IModel from '../../core/interface/IModel';
import InventoryInventoryStatistics from './InventoryInventoryStatistics';
import InventoryItem from './InventoryItem';
export default class InventoryInventory implements IModel {
    private inventoryName;
    private statistics;
    private item;
    getInventoryName(): string | null;
    setInventoryName(inventoryName: string | null): this;
    withInventoryName(inventoryName: string | null): this;
    getStatistics(): InventoryInventoryStatistics[] | null;
    setStatistics(statistics: InventoryInventoryStatistics[] | null): this;
    withStatistics(statistics: InventoryInventoryStatistics[] | null): this;
    getItem(): InventoryItem[] | null;
    setItem(item: InventoryItem[] | null): this;
    withItem(item: InventoryItem[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventory | null;
    toDict(): {
        [key: string]: any;
    };
}
