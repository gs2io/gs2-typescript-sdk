import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryNamespaceIncreaseCapacityDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryNamespaceIncreaseCapacityDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryNamespaceIncreaseCapacityDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryNamespaceIncreaseCapacityDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryNamespaceIncreaseCapacityDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryNamespaceIncreaseCapacityDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryNamespaceIncreaseCapacityDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceIncreaseCapacityDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
