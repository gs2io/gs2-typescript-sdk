import IModel from '../../core/interface/IModel';
export default class MoneyNamespaceWithdrawDistributionSegment implements IModel {
    private slot;
    private count;
    getSlot(): number | null;
    setSlot(slot: number | null): this;
    withSlot(slot: number | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MoneyNamespaceWithdrawDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
