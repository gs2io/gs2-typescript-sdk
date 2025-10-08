import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryNamespaceIncreaseCapacityAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryNamespaceIncreaseCapacityAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceIncreaseCapacityAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
