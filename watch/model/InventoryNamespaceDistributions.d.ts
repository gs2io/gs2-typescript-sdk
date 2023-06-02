import IModel from '../../core/interface/IModel';
import InventoryNamespaceAcquireDistribution from './InventoryNamespaceAcquireDistribution';
import InventoryNamespaceAcquireAmountDistribution from './InventoryNamespaceAcquireAmountDistribution';
import InventoryNamespaceConsumeDistribution from './InventoryNamespaceConsumeDistribution';
import InventoryNamespaceConsumeAmountDistribution from './InventoryNamespaceConsumeAmountDistribution';
import InventoryNamespaceIncreaseCapacityDistribution from './InventoryNamespaceIncreaseCapacityDistribution';
import InventoryNamespaceIncreaseCapacityAmountDistribution from './InventoryNamespaceIncreaseCapacityAmountDistribution';
export default class InventoryNamespaceDistributions implements IModel {
    private acquire;
    private acquireAmount;
    private consume;
    private consumeAmount;
    private increaseCapacity;
    private increaseCapacityAmount;
    getAcquire(): InventoryNamespaceAcquireDistribution | null;
    setAcquire(acquire: InventoryNamespaceAcquireDistribution | null): this;
    withAcquire(acquire: InventoryNamespaceAcquireDistribution | null): this;
    getAcquireAmount(): InventoryNamespaceAcquireAmountDistribution | null;
    setAcquireAmount(acquireAmount: InventoryNamespaceAcquireAmountDistribution | null): this;
    withAcquireAmount(acquireAmount: InventoryNamespaceAcquireAmountDistribution | null): this;
    getConsume(): InventoryNamespaceConsumeDistribution | null;
    setConsume(consume: InventoryNamespaceConsumeDistribution | null): this;
    withConsume(consume: InventoryNamespaceConsumeDistribution | null): this;
    getConsumeAmount(): InventoryNamespaceConsumeAmountDistribution | null;
    setConsumeAmount(consumeAmount: InventoryNamespaceConsumeAmountDistribution | null): this;
    withConsumeAmount(consumeAmount: InventoryNamespaceConsumeAmountDistribution | null): this;
    getIncreaseCapacity(): InventoryNamespaceIncreaseCapacityDistribution | null;
    setIncreaseCapacity(increaseCapacity: InventoryNamespaceIncreaseCapacityDistribution | null): this;
    withIncreaseCapacity(increaseCapacity: InventoryNamespaceIncreaseCapacityDistribution | null): this;
    getIncreaseCapacityAmount(): InventoryNamespaceIncreaseCapacityAmountDistribution | null;
    setIncreaseCapacityAmount(increaseCapacityAmount: InventoryNamespaceIncreaseCapacityAmountDistribution | null): this;
    withIncreaseCapacityAmount(increaseCapacityAmount: InventoryNamespaceIncreaseCapacityAmountDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
