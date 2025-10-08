import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class InventoryInventoryConsumeAmountDistribution implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.InventoryInventoryConsumeAmountDistributionStatistics | null;
    setStatistics(statistics: Gs2Watch.InventoryInventoryConsumeAmountDistributionStatistics | null): this;
    withStatistics(statistics: Gs2Watch.InventoryInventoryConsumeAmountDistributionStatistics | null): this;
    getDistribution(): Gs2Watch.InventoryInventoryConsumeAmountDistributionSegment[] | null;
    setDistribution(distribution: Gs2Watch.InventoryInventoryConsumeAmountDistributionSegment[] | null): this;
    withDistribution(distribution: Gs2Watch.InventoryInventoryConsumeAmountDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InventoryInventoryConsumeAmountDistribution | null;
    toDict(): {
        [key: string]: any;
    };
}
