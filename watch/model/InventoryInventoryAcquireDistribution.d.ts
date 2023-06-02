import IModel from '../../core/interface/IModel';
import InventoryInventoryAcquireDistributionStatistics from './InventoryInventoryAcquireDistributionStatistics';
import InventoryInventoryAcquireDistributionSegment from './InventoryInventoryAcquireDistributionSegment';
export default class InventoryInventoryAcquireDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryInventoryAcquireDistributionStatistics | null;
    setStatistics(statistics: InventoryInventoryAcquireDistributionStatistics | null): this;
    withStatistics(statistics: InventoryInventoryAcquireDistributionStatistics | null): this;
    getDistribution(): InventoryInventoryAcquireDistributionSegment[] | null;
    setDistribution(distribution: InventoryInventoryAcquireDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryInventoryAcquireDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryAcquireDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
