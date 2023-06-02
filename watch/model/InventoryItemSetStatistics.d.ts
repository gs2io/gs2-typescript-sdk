import IModel from '../../core/interface/IModel';
export default class InventoryItemSetStatistics implements IModel {
    private acquired;
    private acquiredAmount;
    private consumed;
    private consumedAmount;
    private consumedRate;
    getAcquired(): number | null;
    setAcquired(acquired: number | null): this;
    withAcquired(acquired: number | null): this;
    getAcquiredAmount(): number | null;
    setAcquiredAmount(acquiredAmount: number | null): this;
    withAcquiredAmount(acquiredAmount: number | null): this;
    getConsumed(): number | null;
    setConsumed(consumed: number | null): this;
    withConsumed(consumed: number | null): this;
    getConsumedAmount(): number | null;
    setConsumedAmount(consumedAmount: number | null): this;
    withConsumedAmount(consumedAmount: number | null): this;
    getConsumedRate(): number | null;
    setConsumedRate(consumedRate: number | null): this;
    withConsumedRate(consumedRate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryItemSetStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
