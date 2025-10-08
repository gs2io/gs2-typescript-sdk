import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryInventoryCapacityDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryInventoryCapacityDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryInventoryCapacityDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryInventoryCapacityDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryInventoryCapacityDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryInventoryCapacityDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryInventoryCapacityDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryCapacityDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
