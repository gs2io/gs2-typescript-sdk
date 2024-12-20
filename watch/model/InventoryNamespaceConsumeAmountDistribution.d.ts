import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryNamespaceConsumeAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryNamespaceConsumeAmountDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryNamespaceConsumeAmountDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryNamespaceConsumeAmountDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryNamespaceConsumeAmountDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryNamespaceConsumeAmountDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryNamespaceConsumeAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryNamespaceConsumeAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
