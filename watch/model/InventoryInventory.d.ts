import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
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
    getStatistics(): Gs2Watch.InventoryInventoryStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryInventoryStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryInventoryStatistics | null): this;
    getDistributions(): Gs2Watch.InventoryInventoryDistributions | null;
    setDistributions(distributions: Gs2Watch.InventoryInventoryDistributions | null): this;
    withDistributions(distributions: Gs2Watch.InventoryInventoryDistributions | null): this;
    getItemSets(): Gs2Watch.InventoryItemSet[] | null;
    setItemSets(itemSets: Gs2Watch.InventoryItemSet[] | null): this;
    withItemSets(itemSets: Gs2Watch.InventoryItemSet[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventory | null;
    toDict(): {
        [key: string]: any;
    };
}
