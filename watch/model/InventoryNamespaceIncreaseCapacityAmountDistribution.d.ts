import IModel from '../../core/interface/IModel';
import InventoryNamespaceIncreaseCapacityAmountDistributionStatistics from './InventoryNamespaceIncreaseCapacityAmountDistributionStatistics';
import InventoryNamespaceIncreaseCapacityAmountDistributionSegment from './InventoryNamespaceIncreaseCapacityAmountDistributionSegment';
export default class InventoryNamespaceIncreaseCapacityAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): InventoryNamespaceIncreaseCapacityAmountDistributionStatistics | null;
    setStatistics(statistics: InventoryNamespaceIncreaseCapacityAmountDistributionStatistics | null): this;
    withStatistics(statistics: InventoryNamespaceIncreaseCapacityAmountDistributionStatistics | null): this;
    getDistribution(): InventoryNamespaceIncreaseCapacityAmountDistributionSegment[] | null;
    setDistribution(distribution: InventoryNamespaceIncreaseCapacityAmountDistributionSegment[] | null): this;
    withDistribution(distribution: InventoryNamespaceIncreaseCapacityAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceIncreaseCapacityAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
