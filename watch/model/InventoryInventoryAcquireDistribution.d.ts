import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryInventoryAcquireDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryInventoryAcquireDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryInventoryAcquireDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryInventoryAcquireDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryInventoryAcquireDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryInventoryAcquireDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryInventoryAcquireDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryAcquireDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
