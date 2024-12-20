import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryInventoryAcquireAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryInventoryAcquireAmountDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryInventoryAcquireAmountDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryInventoryAcquireAmountDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryInventoryAcquireAmountDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryInventoryAcquireAmountDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryInventoryAcquireAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryAcquireAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
