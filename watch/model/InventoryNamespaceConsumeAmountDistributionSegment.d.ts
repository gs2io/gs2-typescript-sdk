import IModel from '../../core/interface/IModel';
export default class InventoryNamespaceConsumeAmountDistributionSegment implements IModel {
    private inventoryName;
    private sum;
    getInventoryName(): string | null;
    setInventoryName(inventoryName: string | null): this;
    withInventoryName(inventoryName: string | null): this;
    getSum(): number | null;
    setSum(sum: number | null): this;
    withSum(sum: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceConsumeAmountDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
