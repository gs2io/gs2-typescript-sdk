import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryInventoryConsumeDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryInventoryConsumeDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryInventoryConsumeDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryInventoryConsumeDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryInventoryConsumeDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryInventoryConsumeDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryInventoryConsumeDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryConsumeDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
