import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryNamespaceAcquireDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryNamespaceAcquireDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryNamespaceAcquireDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryNamespaceAcquireDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryNamespaceAcquireDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryNamespaceAcquireDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryNamespaceAcquireDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceAcquireDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
