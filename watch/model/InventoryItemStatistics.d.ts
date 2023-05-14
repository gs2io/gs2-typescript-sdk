import IModel from '../../core/interface/IModel';
export default class InventoryItemStatistics implements IModel {
    private acquired;
    private consumed;
    private consumedRate;
    getAcquired(): number | null;
    setAcquired(acquired: number | null): this;
    withAcquired(acquired: number | null): this;
    getConsumed(): number | null;
    setConsumed(consumed: number | null): this;
    withConsumed(consumed: number | null): this;
    getConsumedRate(): number | null;
    setConsumedRate(consumedRate: number | null): this;
    withConsumedRate(consumedRate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryItemStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
