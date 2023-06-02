import IModel from '../../core/interface/IModel';
import InventoryInventoryStatistics from './InventoryInventoryStatistics';
import InventoryInventoryDistributions from './InventoryInventoryDistributions';
import InventoryItemSet from './InventoryItemSet';
export default class InventoryInventory implements IModel {
    private inventoryId;
    private inventoryName;
    private statistics;
    private distributions;
    private itemSets;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getInventoryName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, inventoryName: string | null): string | null;
    getInventoryId(): string | null;
    setInventoryId(inventoryId: string | null): this;
    withInventoryId(inventoryId: string | null): this;
    getInventoryName(): string | null;
    setInventoryName(inventoryName: string | null): this;
    withInventoryName(inventoryName: string | null): this;
    getStatistics(): InventoryInventoryStatistics | null;
    setStatistics(statistics: InventoryInventoryStatistics | null): this;
    withStatistics(statistics: InventoryInventoryStatistics | null): this;
    getDistributions(): InventoryInventoryDistributions | null;
    setDistributions(distributions: InventoryInventoryDistributions | null): this;
    withDistributions(distributions: InventoryInventoryDistributions | null): this;
    getItemSets(): InventoryItemSet[] | null;
    setItemSets(itemSets: InventoryItemSet[] | null): this;
    withItemSets(itemSets: InventoryItemSet[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventory | null;
    toDict(): {
        [key: string]: any;
    };
}
