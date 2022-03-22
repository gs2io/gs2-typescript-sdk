import IModel from '../../core/interface/IModel';
import SalesItem from './SalesItem';
import SalesItemGroup from './SalesItemGroup';
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
    getSalesItem(): SalesItem | null;
    setSalesItem(salesItem: SalesItem | null): this;
    withSalesItem(salesItem: SalesItem | null): this;
    getSalesItemGroup(): SalesItemGroup | null;
    setSalesItemGroup(salesItemGroup: SalesItemGroup | null): this;
    withSalesItemGroup(salesItemGroup: SalesItemGroup | null): this;
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
