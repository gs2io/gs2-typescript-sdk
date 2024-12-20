import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryNamespaceDistributions implements IModel {
    private acquire;
    private acquireAmount;
    private consume;
    private consumeAmount;
    private increaseCapacity;
    private increaseCapacityAmount;
    getAcquire(): Gs2Watch.InventoryNamespaceAcquireDistribution | null;
    setAcquire(acquire: Gs2Watch.InventoryNamespaceAcquireDistribution | null): this;
    withAcquire(acquire: Gs2Watch.InventoryNamespaceAcquireDistribution | null): this;
    getAcquireAmount(): Gs2Watch.InventoryNamespaceAcquireAmountDistribution | null;
    setAcquireAmount(acquireAmount: Gs2Watch.InventoryNamespaceAcquireAmountDistribution | null): this;
    withAcquireAmount(acquireAmount: Gs2Watch.InventoryNamespaceAcquireAmountDistribution | null): this;
    getConsume(): Gs2Watch.InventoryNamespaceConsumeDistribution | null;
    setConsume(consume: Gs2Watch.InventoryNamespaceConsumeDistribution | null): this;
    withConsume(consume: Gs2Watch.InventoryNamespaceConsumeDistribution | null): this;
    getConsumeAmount(): Gs2Watch.InventoryNamespaceConsumeAmountDistribution | null;
    setConsumeAmount(consumeAmount: Gs2Watch.InventoryNamespaceConsumeAmountDistribution | null): this;
    withConsumeAmount(consumeAmount: Gs2Watch.InventoryNamespaceConsumeAmountDistribution | null): this;
    getIncreaseCapacity(): Gs2Watch.InventoryNamespaceIncreaseCapacityDistribution | null;
    setIncreaseCapacity(increaseCapacity: Gs2Watch.InventoryNamespaceIncreaseCapacityDistribution | null): this;
    withIncreaseCapacity(increaseCapacity: Gs2Watch.InventoryNamespaceIncreaseCapacityDistribution | null): this;
    getIncreaseCapacityAmount(): Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistribution | null;
    setIncreaseCapacityAmount(increaseCapacityAmount: Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistribution | null): this;
    withIncreaseCapacityAmount(increaseCapacityAmount: Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
