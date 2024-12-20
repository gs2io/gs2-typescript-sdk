import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryInventoryDistributions implements IModel {
    private capacity;
    private acquire;
    private acquireAmount;
    private consume;
    private consumeAmount;
    getCapacity(): Gs2Watch.InventoryInventoryCapacityDistribution | null;
    setCapacity(capacity: Gs2Watch.InventoryInventoryCapacityDistribution | null): this;
    withCapacity(capacity: Gs2Watch.InventoryInventoryCapacityDistribution | null): this;
    getAcquire(): Gs2Watch.InventoryInventoryAcquireDistribution | null;
    setAcquire(acquire: Gs2Watch.InventoryInventoryAcquireDistribution | null): this;
    withAcquire(acquire: Gs2Watch.InventoryInventoryAcquireDistribution | null): this;
    getAcquireAmount(): Gs2Watch.InventoryInventoryAcquireAmountDistribution | null;
    setAcquireAmount(acquireAmount: Gs2Watch.InventoryInventoryAcquireAmountDistribution | null): this;
    withAcquireAmount(acquireAmount: Gs2Watch.InventoryInventoryAcquireAmountDistribution | null): this;
    getConsume(): Gs2Watch.InventoryInventoryConsumeDistribution | null;
    setConsume(consume: Gs2Watch.InventoryInventoryConsumeDistribution | null): this;
    withConsume(consume: Gs2Watch.InventoryInventoryConsumeDistribution | null): this;
    getConsumeAmount(): Gs2Watch.InventoryInventoryConsumeAmountDistribution | null;
    setConsumeAmount(consumeAmount: Gs2Watch.InventoryInventoryConsumeAmountDistribution | null): this;
    withConsumeAmount(consumeAmount: Gs2Watch.InventoryInventoryConsumeAmountDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
