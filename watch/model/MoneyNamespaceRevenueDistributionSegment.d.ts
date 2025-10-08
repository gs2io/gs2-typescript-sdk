import IModel from '../../core/interface/IModel';
export default class MoneyNamespaceRevenueDistributionSegment implements IModel {
    private slot;
    private sum;
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getSum(): number | null;
    setSum(sum: number | null): this;
    withSum(sum: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceRevenueDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
