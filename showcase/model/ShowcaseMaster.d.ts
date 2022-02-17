import IModel from '../../core/interface/IModel';
import DisplayItemMaster from './DisplayItemMaster';
export default class ShowcaseMaster implements IModel {
    private showcaseId;
    private name;
    private description;
    private metadata;
    private salesPeriodEventId;
    private displayItems;
    private createdAt;
    private updatedAt;
    getShowcaseId(): string | null;
    setShowcaseId(showcaseId: string | null): this;
    withShowcaseId(showcaseId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getSalesPeriodEventId(): string | null;
    setSalesPeriodEventId(salesPeriodEventId: string | null): this;
    withSalesPeriodEventId(salesPeriodEventId: string | null): this;
    getDisplayItems(): DisplayItemMaster[] | null;
    setDisplayItems(displayItems: DisplayItemMaster[] | null): this;
    withDisplayItems(displayItems: DisplayItemMaster[] | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
