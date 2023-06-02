import IModel from '../../core/interface/IModel';
import InventoryNamespaceIncreaseCapacityDistributionStatistics from './InventoryNamespaceIncreaseCapacityDistributionStatistics';
import InventoryNamespaceIncreaseCapacityDistributionSegment from './InventoryNamespaceIncreaseCapacityDistributionSegment';
export default class InventoryNamespaceIncreaseCapacityDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryNamespaceIncreaseCapacityDistributionStatistics | null;
    setStatistics(statistics: InventoryNamespaceIncreaseCapacityDistributionStatistics | null): this;
    withStatistics(statistics: InventoryNamespaceIncreaseCapacityDistributionStatistics | null): this;
    getDistribution(): InventoryNamespaceIncreaseCapacityDistributionSegment[] | null;
    setDistribution(distribution: InventoryNamespaceIncreaseCapacityDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryNamespaceIncreaseCapacityDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceIncreaseCapacityDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
