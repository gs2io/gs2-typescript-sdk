import IModel from '../../core/interface/IModel';
import InventoryInventoryCapacityDistributionStatistics from './InventoryInventoryCapacityDistributionStatistics';
import InventoryInventoryCapacityDistributionSegment from './InventoryInventoryCapacityDistributionSegment';
export default class InventoryInventoryCapacityDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryInventoryCapacityDistributionStatistics | null;
    setStatistics(statistics: InventoryInventoryCapacityDistributionStatistics | null): this;
    withStatistics(statistics: InventoryInventoryCapacityDistributionStatistics | null): this;
    getDistribution(): InventoryInventoryCapacityDistributionSegment[] | null;
    setDistribution(distribution: InventoryInventoryCapacityDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryInventoryCapacityDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryCapacityDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
