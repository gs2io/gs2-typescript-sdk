import IModel from '../../core/interface/IModel';
export default class InventoryInventoryStatistics implements IModel {
    private acquired;
    private consume;
    private increaseCapacity;
    private increaseCapacityAmount;
    getAcquired(): number | null;
    setAcquired(acquired: number | null): this;
    withAcquired(acquired: number | null): this;
    getConsume(): number | null;
    setConsume(consume: number | null): this;
    withConsume(consume: number | null): this;
    getIncreaseCapacity(): number | null;
    setIncreaseCapacity(increaseCapacity: number | null): this;
    withIncreaseCapacity(increaseCapacity: number | null): this;
    getIncreaseCapacityAmount(): number | null;
    setIncreaseCapacityAmount(increaseCapacityAmount: number | null): this;
    withIncreaseCapacityAmount(increaseCapacityAmount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
