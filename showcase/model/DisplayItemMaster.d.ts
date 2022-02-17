import IModel from '../../core/interface/IModel';
export default class DisplayItemMaster implements IModel {
    private displayItemId;
    private type;
    private salesItemName;
    private salesItemGroupName;
    private salesPeriodEventId;
    getDisplayItemId(): string | null;
    setDisplayItemId(displayItemId: string | null): this;
    withDisplayItemId(displayItemId: string | null): this;
    getType(): string | null;
    setType(type: string | null): this;
    withType(type: string | null): this;
    getSalesItemName(): string | null;
    setSalesItemName(salesItemName: string | null): this;
    withSalesItemName(salesItemName: string | null): this;
    getSalesItemGroupName(): string | null;
    setSalesItemGroupName(salesItemGroupName: string | null): this;
    withSalesItemGroupName(salesItemGroupName: string | null): this;
    getSalesPeriodEventId(): string | null;
    setSalesPeriodEventId(salesPeriodEventId: string | null): this;
    withSalesPeriodEventId(salesPeriodEventId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DisplayItemMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
