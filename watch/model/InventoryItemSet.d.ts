import IModel from '../../core/interface/IModel';
import InventoryItemSetStatistics from './InventoryItemSetStatistics';
import InventoryItemSetDistributions from './InventoryItemSetDistributions';
export default class InventoryItemSet implements IModel {
    private itemSetId;
    private itemName;
    private itemSetName;
    private statistics;
    private distributions;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getDay(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getInventoryName(grn: string): string | null;
    static getItemSetName(grn: string): string | null;
    static getItemName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, day: string | null, namespaceName: string | null, inventoryName: string | null, itemSetName: string | null, itemName: string | null): string | null;
    getItemSetId(): string | null;
    setItemSetId(itemSetId: string | null): this;
    withItemSetId(itemSetId: string | null): this;
    getItemName(): string | null;
    setItemName(itemName: string | null): this;
    withItemName(itemName: string | null): this;
    getItemSetName(): string | null;
    setItemSetName(itemSetName: string | null): this;
    withItemSetName(itemSetName: string | null): this;
    getStatistics(): InventoryItemSetStatistics | null;
    setStatistics(statistics: InventoryItemSetStatistics | null): this;
    withStatistics(statistics: InventoryItemSetStatistics | null): this;
    getDistributions(): InventoryItemSetDistributions | null;
    setDistributions(distributions: InventoryItemSetDistributions | null): this;
    withDistributions(distributions: InventoryItemSetDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryItemSet | null;
    toDict(): {
        [key: string]: any;
    };
}
