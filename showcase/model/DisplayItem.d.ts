import IModel from '../../core/interface/IModel';
import * as Gs2Showcase from '../../showcase/model';
export default class DisplayItem implements IModel {
    private displayItemId;
    private type;
    private salesItem;
    private salesItemGroup;
    private salesPeriodEventId;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getDisplayItemId(): string | null;
    setDisplayItemId(displayItemId: string | null): this;
    withDisplayItemId(displayItemId: string | null): this;
    getType(): string | null;
    setType(type: string | null): this;
    withType(type: string | null): this;
    getSalesItem(): Gs2Showcase.SalesItem | null;
    setSalesItem(salesItem: Gs2Showcase.SalesItem | null): this;
    withSalesItem(salesItem: Gs2Showcase.SalesItem | null): this;
    getSalesItemGroup(): Gs2Showcase.SalesItemGroup | null;
    setSalesItemGroup(salesItemGroup: Gs2Showcase.SalesItemGroup | null): this;
    withSalesItemGroup(salesItemGroup: Gs2Showcase.SalesItemGroup | null): this;
    getSalesPeriodEventId(): string | null;
    setSalesPeriodEventId(salesPeriodEventId: string | null): this;
    withSalesPeriodEventId(salesPeriodEventId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DisplayItem | null;
    toDict(): {
        [key: string]: any;
    };
}
