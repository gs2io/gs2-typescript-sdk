import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
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
    getStatistics(): Gs2Watch.InventoryItemSetStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryItemSetStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryItemSetStatistics | null): this;
    getDistributions(): Gs2Watch.InventoryItemSetDistributions | null;
    setDistributions(distributions: Gs2Watch.InventoryItemSetDistributions | null): this;
    withDistributions(distributions: Gs2Watch.InventoryItemSetDistributions | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryItemSet | null;
    toDict(): {
        [key: string]: any;
    };
}
