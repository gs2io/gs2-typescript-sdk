import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryNamespaceConsumeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryNamespaceConsumeDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryNamespaceConsumeDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryNamespaceConsumeDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryNamespaceConsumeDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryNamespaceConsumeDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryNamespaceConsumeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceConsumeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
