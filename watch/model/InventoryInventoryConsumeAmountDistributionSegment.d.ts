import IModel from '../../core/interface/IModel';
export default class InventoryInventoryConsumeAmountDistributionSegment implements IModel {
    private itemName;
    private sum;
    getItemName(): string | null;
    setItemName(itemName: string | null): this;
    withItemName(itemName: string | null): this;
    getSum(): number | null;
    setSum(sum: number | null): this;
    withSum(sum: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryConsumeAmountDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
