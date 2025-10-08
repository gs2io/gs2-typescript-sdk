import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryItemSetCountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryItemSetCountDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryItemSetCountDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryItemSetCountDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryItemSetCountDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryItemSetCountDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryItemSetCountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryItemSetCountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
