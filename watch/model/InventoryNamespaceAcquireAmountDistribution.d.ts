import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryNamespaceAcquireAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryNamespaceAcquireAmountDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryNamespaceAcquireAmountDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryNamespaceAcquireAmountDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryNamespaceAcquireAmountDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryNamespaceAcquireAmountDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryNamespaceAcquireAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceAcquireAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
