import IModel from '../../core/interface/IModel';
import * as Gs2Showcase from '../../showcase/model';
export default class Showcase implements IModel {
    private showcaseId;
    private name;
    private metadata;
    private salesPeriodEventId;
    private displayItems;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getNamespaceName(grn: string): string | null;
    static getShowcaseName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, namespaceName: string | null, showcaseName: string | null): string | null;
    getShowcaseId(): string | null;
    setShowcaseId(showcaseId: string | null): this;
    withShowcaseId(showcaseId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getSalesPeriodEventId(): string | null;
    setSalesPeriodEventId(salesPeriodEventId: string | null): this;
    withSalesPeriodEventId(salesPeriodEventId: string | null): this;
    getDisplayItems(): Gs2Showcase.DisplayItem[] | null;
    setDisplayItems(displayItems: Gs2Showcase.DisplayItem[] | null): this;
    withDisplayItems(displayItems: Gs2Showcase.DisplayItem[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Showcase | null;
    toDict(): {
        [key: string]: any;
    };
}
