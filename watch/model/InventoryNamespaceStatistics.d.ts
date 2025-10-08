import IModel from '../../core/interface/IModel';
export default class InventoryNamespaceStatistics implements IModel {
    private acquire;
    private consume;
    private increaseCapacity;
    getAcquire(): number | null;
    setAcquire(acquire: number | null): this;
    withAcquire(acquire: number | null): this;
    getConsume(): number | null;
    setConsume(consume: number | null): this;
    withConsume(consume: number | null): this;
    getIncreaseCapacity(): number | null;
    setIncreaseCapacity(increaseCapacity: number | null): this;
    withIncreaseCapacity(increaseCapacity: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
