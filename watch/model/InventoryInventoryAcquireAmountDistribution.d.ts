import IModel from '../../core/interface/IModel';
import InventoryInventoryAcquireAmountDistributionStatistics from './InventoryInventoryAcquireAmountDistributionStatistics';
import InventoryInventoryAcquireAmountDistributionSegment from './InventoryInventoryAcquireAmountDistributionSegment';
export default class InventoryInventoryAcquireAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryInventoryAcquireAmountDistributionStatistics | null;
    setStatistics(statistics: InventoryInventoryAcquireAmountDistributionStatistics | null): this;
    withStatistics(statistics: InventoryInventoryAcquireAmountDistributionStatistics | null): this;
    getDistribution(): InventoryInventoryAcquireAmountDistributionSegment[] | null;
    setDistribution(distribution: InventoryInventoryAcquireAmountDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryInventoryAcquireAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryAcquireAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
