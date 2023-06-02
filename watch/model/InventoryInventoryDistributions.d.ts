import IModel from '../../core/interface/IModel';
import InventoryInventoryCapacityDistribution from './InventoryInventoryCapacityDistribution';
import InventoryInventoryAcquireDistribution from './InventoryInventoryAcquireDistribution';
import InventoryInventoryAcquireAmountDistribution from './InventoryInventoryAcquireAmountDistribution';
import InventoryInventoryConsumeDistribution from './InventoryInventoryConsumeDistribution';
import InventoryInventoryConsumeAmountDistribution from './InventoryInventoryConsumeAmountDistribution';
export default class InventoryInventoryDistributions implements IModel {
    private capacity;
    private acquire;
    private acquireAmount;
    private consume;
    private consumeAmount;
    getCapacity(): InventoryInventoryCapacityDistribution | null;
    setCapacity(capacity: InventoryInventoryCapacityDistribution | null): this;
    withCapacity(capacity: InventoryInventoryCapacityDistribution | null): this;
    getAcquire(): InventoryInventoryAcquireDistribution | null;
    setAcquire(acquire: InventoryInventoryAcquireDistribution | null): this;
    withAcquire(acquire: InventoryInventoryAcquireDistribution | null): this;
    getAcquireAmount(): InventoryInventoryAcquireAmountDistribution | null;
    setAcquireAmount(acquireAmount: InventoryInventoryAcquireAmountDistribution | null): this;
    withAcquireAmount(acquireAmount: InventoryInventoryAcquireAmountDistribution | null): this;
    getConsume(): InventoryInventoryConsumeDistribution | null;
    setConsume(consume: InventoryInventoryConsumeDistribution | null): this;
    withConsume(consume: InventoryInventoryConsumeDistribution | null): this;
    getConsumeAmount(): InventoryInventoryConsumeAmountDistribution | null;
    setConsumeAmount(consumeAmount: InventoryInventoryConsumeAmountDistribution | null): this;
    withConsumeAmount(consumeAmount: InventoryInventoryConsumeAmountDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
